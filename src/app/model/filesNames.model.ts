export class FilesNames{
    myFileMaps = new Map([
        ["ברכה לפני לימוד","blassbefore.txt"],
        ["א","aleff.txt"],
        ["ב","bet.txt"],
        ["ג","gimel.txt"],
        ["ד","dalet.txt"],
        ["ה","hai.txt"],
        ["ו","vav.txt"],
        ["ז","zain.txt"],
        ["ח","hat.txt"],
        ["ט","tet.txt"],
        ["י","yud.txt"],
        ["כ","kath.txt"],
        ["ך","kath.txt"],
        ["ל","lamed.txt"],
        ["מ","mem.txt"],
        ["ם","mem.txt"],
        ["נ","noon.txt"],
        ["ן","noon.txt"],
        ["ס","sameh.txt"],
        ["ע","ain.txt"],
        ["פ","pay.txt"],
        ["ף","pay.txt"],
        ["צ","shadik.txt"],
        ["ץ","shadik.txt"],
        ["ק","kuof.txt"],
        ["ר","raish.txt"],
        ["ש","shien.txt"],
        ["ת","taf.txt"],
        ["ברכה אחר לימוד","afterblass.txt"],
        ["כלים כד","kelim.txt"],
        ["אותיות נשמה","suolLetters.txt"]
    ]); 

    getFileContent(key:string):any{
       return this.myFileMaps.get(key);
    }
}