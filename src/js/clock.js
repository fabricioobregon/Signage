// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';


let mili = "";
let interval = 30;
let nhours;
let n24hours;
let nmins;
let nsecn;
let nday;
let nmonth;
let nmonth2;
let ntoday;
let ntoday2;
let nyear;
let AorP = " ";
let clockId = 0;
let language = "ENGLISH"

// let txt_time;
let txt_date;
let txt_time;
let current_time;

export default function SetTime() {
    const [ntime, setnTime] = useState(txt_time);







    let lang;
// function setTime(themili, lang) {
    mili = Date.now();

    //if no language is set, use the default (english)
    if (lang != null)
        language = "FRENCH";

    //setInterval('startTime()', (interval * 1000));

    /*if (clockId) {
        clearTimeout(clockId);
        clockId = 0;
    }    */
    startTime();


    function startTime() {

        if (clockId) {
            clearTimeout(clockId);
            clockId = 0;
        }


        let thetime = new Date(mili);
        thetime.setSeconds(thetime.getSeconds() + interval);
        nhours = thetime.getHours();
        nmins = thetime.getMinutes();
        nsecn = thetime.getSeconds();
        nday = thetime.getDay();
        nmonth = thetime.getMonth();
        ntoday = thetime.getDate();
        nyear = thetime.getFullYear();
        AorP = " ";

        n24hours = nhours;
        if (nhours >= 12)
            AorP = "PM";
        else
            AorP = "AM";

        if (nhours >= 13)
            nhours -= 12;

        if (nhours === 0)
            nhours = 12;

        if (nsecn < 10)
            nsecn = "0" + nsecn;

        if (nmins < 10)
            nmins = "0" + nmins;

        nday = translate(language, "day", nday);

        nmonth += 1;

        let tmonth = translate(language, "short_month", nmonth);
        // eslint-disable-next-line no-unused-vars
        let lmonth_display = translate(language, "long_month", nmonth);
        let lmonth = translate("ENGLISH", "long_month", nmonth);

        if (nmonth < 10)
            nmonth2 = "0" + nmonth;
        else
            nmonth2 = nmonth;
        if (ntoday < 10)
            ntoday2 = "0" + ntoday;
        else
            ntoday2 = ntoday;

        if (nyear <= 99)
            nyear = "19" + nyear;

        if ((nyear > 99) && (nyear < 2000))
            nyear += 1900;


        txt_time = translate(language, "hours", n24hours) + ":" + nmins + " " + translate(language, "AorP", AorP);
        if (language === "FRENCH")
            txt_date = "Le " + nday + ", " + ntoday + " " + tmonth + " " + nyear;
        else
            txt_date = nday + ", " + tmonth + " " + ntoday + ", " + nyear;
        // current_time = current_time.setAttribute('value', nyear + "" + nmonth2 + "" + ntoday2 + "_" + n24hours + "" + nmins);

        mili = `${lmonth} ${ntoday}, ${nyear} ${nhours}:${nmins}:${nsecn} ${AorP}`;
        // eslint-disable-next-line no-implied-eval
        clockId = setTimeout(`startTime()`, (interval * 1000));

    }


//convert the dow and months to different languages.
    function translate(lang, type, val) {
        let dayArr;
        let smonArr;
        let lmonArr;

        if (type === "day") {
            if (lang === "FRENCH")
                dayArr = ["Dimance", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
            else
                dayArr = ["Sun.", "Mon.", "Tue.", "Wed", "Thu.", "Fri.", "Sat."];
            return dayArr[val];
        } else if (type === "short_month") {
            if (lang === "FRENCH")
                smonArr = ["", "janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
            else
                smonArr = ["", "Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
            return smonArr[val];
        } else if (type === "long_month") {
            if (lang === "FRENCH")
                lmonArr = ["", "janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
            else
                lmonArr = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            return lmonArr[val];
        } else if (type === "hours") {
//		if (lang == "ENGLISH") {
            if (val >= 13) val -= 12;
//		}

            if (val === 0) val = 12;

            return val;
        } else if (type === "AorP") {
            if (lang === "FRENCH") {
//			val = "";	//24 hours
            }

            return val;
        }
    }



    return (
        <div>
            <div id="txt_date">{txt_date}</div>
            <div id="txt_time">{txt_time}</div>
            <div id="refresh_timestamp">
                <div id="current_time" value=""/>
            </div>
        </div>

    );


}
