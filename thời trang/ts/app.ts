import { Toutfitnam,Toutfitnu, TGioiTinh} from './data.js'
import { nam_arr, nu_arr} from './data.js'

const hien1outfitnam = (outfit:Toutfitnam) =>{
    return `<div>
     <img src="${outfit.anh}">
     <h4>Mô tả: ${outfit.mota} </h4>
     <p>Áo: ${outfit.ao}</p>
     <p>Quần: ${outfit.quan}</p>
     <p>Phái: ${phaicuaoutfit(outfit.phai) }</p>
    </div>`;
    }
    
export const showoutfitnam = () => {
    const html_arr = nam_arr.map(hien1outfitnam);
    return html_arr.join("");
/* Cách cũ
    let str=``;
    nam_arr.forEach ( outfitnam => str += hien1outfit (outfitnam) );
    return str;
*/
}

const hien1outfitnu = (outfit:Toutfitnu) =>{
    return `<div>
     <img src="${outfit.anh}">
     <h4>Mô tả: ${outfit.mota} </h4>
     <p>Áo: ${outfit.ao}</p>
     <p>Quần: ${outfit.quan}</p>
     <p>Phái: ${phaicuaoutfit(outfit.phai) }</p>
    </div>`;
    }

export const showoutfitnu = () => {
    const html_arr = nu_arr.map(hien1outfitnu);
    return html_arr.join("");
}

const phaicuaoutfit = (phai:TGioiTinh):string => {
    if (typeof phai =='boolean') {
        if (phai==true) return "Nữ"; 
        else return "Nam";
    }
    else return phai as string;
}

/*  API  */

const show1thuonghieu = (th) => {
    return `
    <div>
    <img src = "${th.anh}">
    <h4> Local Brand: ${th.ten} </h4>
     </div>`;
}
export const showthuonghieu = async () => {
    let thuonghieu_arr = await fetch ("http://localhost:3000/thuong_hieu")
    .then ( res => res.json())
    .then ( data => {return data});
    let str=``;
    thuonghieu_arr.forEach ( th => str += show1thuonghieu(th))
    return str;
}
 