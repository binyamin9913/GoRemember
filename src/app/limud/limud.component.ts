import { Component, HostListener, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GenderType } from '../const/gender-type';
import { StratLimudService } from './strat-limud.service';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-limud',
  templateUrl: './limud.component.html',
  styleUrls: ['./limud.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LimudComponent implements OnInit,OnDestroy {
  filesContent$:Observable<string> = new Observable<string>();
  subscriptions:Subscription[]=[];
  privateName:string = '';
  fullName:any;
  fileContent:string='';
  color:string | undefined; 
  genderType = GenderType;
  contantfontSize:number | undefined;
  titlePage='';
  
  constructor(private stratLimudService:StratLimudService ,private activatedRoute: ActivatedRoute) {
    this.subscriptions.push(this.activatedRoute.paramMap.subscribe(params => this.ngOnInit()));
   }

  ngOnInit(): void {
    this.setFullName();
    this.subscriptions=[...this.changeRoutes(),this.setTitleName()];
  }

  changeFontSize(fontSize:number){
    this.contantfontSize=fontSize;
  }

  changeColor(color:string){
    this.color=color;
  }

  private setFullName(){
    this.fullName = sessionStorage.getItem('deadManName');
    this.privateName = this.fullName.includes(this.genderType.BOY) ? this.extractPrivateName(this.fullName,this.genderType.BOY) : this.extractPrivateName(this.fullName,this.genderType.GIRL)
  }

  private changeRoutes():Subscription[]{
    const subscriptions:Subscription[]=[]
    subscriptions.push(this.activatedRoute.params.subscribe(params => this.filesContent$=this.stratLimudService.getContentFromFile(params['pageContent'])))
    subscriptions.push(this.filesContent$.subscribe(value =>
      {
        const _genderType = this.fullName.includes(this.genderType.BOY) ? this.genderType.BOY : this.genderType.GIRL
        this.fileContent = value.toString().replace('(פב"פ)','<i class="privateName">'+this.fullName+'</i>')

        if(value.toString().includes('(ברכה לאחר לימוד)'))
        {
            if(this.genderType.BOY === _genderType)
            {
              this.fileContent = this.fileContent.toString().replace('(ברכה לאחר לימוד)', this.afterBlassForBoy());
            }

            if(this.genderType.GIRL === _genderType)
            {
              this.fileContent = this.fileContent.toString().replace('(ברכה לאחר לימוד)', this.afterBlassForGirl());
            }
        }
      }))

    return subscriptions
  }

  private extractPrivateName(fullname:string,genderType:GenderType): string{
   return fullname.split(genderType)[0];
  }

  private setTitleName(){
    return this.activatedRoute.params.subscribe(params => this.titlePage = params['pageContent'])
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }

  private afterBlassForBoy():string
  {
    return "וְתִשְׁמוֹר אוֹתוֹ מֵחִבּוּט הַקֶּבֶר וּמֵרִמָּה וְתוֹלֵעָה, וְתִסְלַח וְתִמְחוֹל לוֹ עַל כָּל פְּשָׁעָיו, כִּי אָדָם אֵין צַדִּיק בָּאָרֶץ אֲשֶׁר יַעֲשֶׂה טוֹב וְלֹא יֶחֱטָא, וּזְכוֹר לוֹ זְכֻיּוֹתָיו וְצִדְקוֹתָיו אֲשֶׁר עָשָׂה, וְתַשְׁפִּיעַ לוֹ מִנִּשְׁמָתוֹ לְדַשֵּׁן עַצְמוֹתָיו בַּקֶּבֶר מֵרֹב טוּב הַצָּפוּן לַצַּדִּיקִים, דִּכְתִיב מָה רַב טוּבְךָ אֲשֶׁר צָפַנְתָּ לִירֵאֶיךָ, וּכְתִיב שֹׁמֵר כָּל עַצְמוֹתָיו אַחַת מֵהֵנָּה לֹא נִשְׁבָּרָה, וְיִשְׁכּוֹן בֶּטַח בָּדָד וְשַׁאֲנָן מִפַּחַד רָעָה, וְאַל יִרְאֶה פְּנֵי גֵּיהִנֹּם, וְנִשְׁמָתוֹ תְּהֵא צְרוּרָה בִּצְרוֹר הַחַיִּים, וּלְהַחֲיוֹתוֹ בִּתְחִיַּת הַמֵּתִים עִם כָּל מֵתֵי עַמְּךָ יִשְׂרָאֵל בְּרַחֲמִים, אָמֵן:    ";
  }

  private afterBlassForGirl():string
  {
    return "וְתִשְׁמוֹר אוֹתָהּ מֵחִבּוּט הַקֶּבֶר וּמֵרִמָּה וְתוֹלֵעָה, וְתִסְלַח וְתִמְחוֹל לָהּ עַל כָּל פְּשָׁעֶיהָ, כִּי אָדָם אֵין צַדִּיק בָּאָרֶץ אֲשֶׁר יַעֲשֶׂה טוֹב וְלֹא יֶחֱטָא, וּזְכוֹר לוֹ זְכֻיּוֹתֶיהָ וְצִדְקוֹתֶיהָ אֲשֶׁר עָשְׂתָה, וְתַשְׁפִּיעַ לָהּ מִנִּשְׁמָתָה לְדַשֵּׁן עַצְמוֹתֶיהָ בַּקֶּבֶר מֵרֹב טוּב הַצָּפוּן לַצַּדִּיקִים, דִּכְתִיב מָה רַב טוּבְךָ אֲשֶׁר צָפַנְתָּ לִירֵאֶיךָ, וּכְתִיב שֹׁמֵר כָּל עַצְמוֹתָיו אַחַת מֵהֵנָּה לֹא נִשְׁבָּרָה, וְתִשְׁכּוֹן בֶּטַח בָּדָד וְשַׁאֲנָן מִפַּחַד רָעָה, וְאַל תִּרְאֶה פְּנֵי גֵּיהִנֹּם, וְנִשְׁמָתָהּ תְּהֵא צְרוּרָה בִּצְרוֹר הַחַיִּים, וּלְהַחֲיוֹתָהּ בִּתְחִיַּת הַמֵּתִים עִם כָּל מֵתֵי עַמְּךָ יִשְׂרָאֵל בְּרַחֲמִים, אָמֵן:";
  }
}
