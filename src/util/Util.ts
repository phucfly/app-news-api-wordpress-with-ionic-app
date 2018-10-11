const SRC_IMG_DEFAULT = "http://tin61.com/wp-content/uploads/2018/09/thumb-default-1-210x136.jpg";


export class Utils {
    public static log(msg: string) {
        console.log(msg);
    }


    public static getObjItemBaseApp(url, element,isIos) {
        if (url == 'https://tin61.com/') {
            return this.getObjItemTin68(element,isIos);
        }
        return this.getObjItemDannangZ(element,isIos);
    }

    //
    public static getObjItemTin68(element,isIos) {
        let html = document.createElement("div");
        html.innerHTML = element.content.rendered;
        // let img = html.getElementsByTagName('img')[0];

        let tileNew = this.toStringHandle(element.title.rendered);


        let imgI = element._embedded['wp:featuredmedia'];
        if (imgI) {
            if (imgI[0].media_details.sizes['medium'] && imgI[0].media_details.sizes['full'].source_url)
                imgI = imgI[0].media_details.sizes['full'].source_url;
            else
                imgI = null;
        }
        let time = (isIos) ? this.getTimeFormatIOS(element.date) : this.getTimeFormat(element.date) ;
        
        this.log("element id category:" + element.categories[0]);
        let obj = {
            id: element.id,
            title: tileNew,
            img: (imgI) ? imgI : SRC_IMG_DEFAULT,
            idCategories: element.categories[0],
            category: element.nameCategory,
            des: element.excerpt.rendered,
            detail: element.content.rendered,
            time: time,
            author: element._embedded.author[0].name,
            link: element.link,
            datetime_create: element.date
        }

        return obj;
    }

    public static getObjItemDannangZ(element,isIos) {
        let html = document.createElement("div");
        html.innerHTML = element.content.rendered;
        // let img = html.getElementsByTagName('img')[0];

        let tileNew = this.toStringHandle(element.title.rendered);
        // let contentNew=this.toStringHandle(element.content.rendered);
        let imgI ;
        try {
           imgI = element._embedded['wp:featuredmedia'][0].media_details.sizes['medium-thumb'].source_url;
        } catch (error) {
            imgI=null;
        }
        
        let time = (isIos) ? this.getTimeFormatIOS(element.date) : this.getTimeFormat(element.date) ;

        // let imgI='http://tin60.com/wp-content/uploads/2018/09/9ab7157cfa38d8260c8d98702b14e9e3-300x157.jpg';
        let obj = {
            id: element.id,
            title: tileNew,
            img: (imgI) ? imgI : SRC_IMG_DEFAULT,
            category: element.nameCategory,
            des: element.excerpt.rendered,
            detail: element.content.rendered,
            time: time,
            author: element._embedded.author[0].name,
            link: element.link,
            datetime_create: element.date
        }

        return obj;
    }

    public static getTimeFormatIOS(date) {
        let stTime = "";
        let d = new Date(date);
        let dateFormat = d.getFullYear() + '-' +
            (d.getMonth() < 10 ? '0' + d.getMonth() : d.getMonth()) + '-' +
            (d.getDate() < 10 ? '0' + d.getDate() : d.getDate());
        let timeMinute = Math.floor((Date.now() - Date.parse(date)) / 1000 / 60);
        let time = ((timeMinute+420) < 60) ? (timeMinute + 420) + ' phút trước' :

            // no ios  let time = (timeMinute < 60) ? (timeMinute ) + ' phút trước' :
            ((timeMinute+420) <1440 ? Math.floor((timeMinute+ 420)/60) + ' giờ trước' : dateFormat);
        return time;
    }

    public static getTimeFormat(date) {
        let stTime = "";
        // let df= new Date(date);
        // let long=df.getTime()+420*60*100;
        let d = new Date(date);

        // let timeCurent = new Date();
        // let temp = Math.floor((timeCurent.getTime() - d.getTime()) / 1000);
        // console.log("time:" + timeCurent.getTime());
        // console.log("time 1:" + d.getTime());
        // console.log("time 2:" + temp);
        // if (temp >= 24 * 60 * 60) {
        //     stTime = this.formatDate(date);
        // } else {
        //     let temp2 = Math.floor(temp / 60 / 60);
        //     if (temp2 > 0) {
        //         stTime = Math.floor(temp / 60 / 60) + " giờ trước";
        //     } else {
        //         stTime = Math.abs(temp % (60)) + " Phút trước";
        //     }
        // }
        // return stTime;

        let dateFormat = d.getFullYear() + '-' +
            (d.getMonth() < 10 ? '0' + d.getMonth() : d.getMonth()) + '-' +
            (d.getDate() < 10 ? '0' + d.getDate() : d.getDate());
        let timeMinute = Math.floor((Date.now() - Date.parse(date)) / 1000 / 60);
            // no ios 
             let time = (timeMinute < 60) ? (timeMinute ) + ' phút trước' :
            timeMinute < 1440 ? Math.floor(timeMinute / 60) + ' giờ trước' : dateFormat;
        return time;
    }

    public static formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }


    public static toStringHandle(st) {
        var str = st;
        // console.log("to string:"+JSON.stringify(st));
        while (str.indexOf("&#") != -1) {
            let find = str.indexOf("&#");
            let temp = str.substring(find, find + 7);
            str = str.replace(temp, '');
        }
        return str;
    }
}