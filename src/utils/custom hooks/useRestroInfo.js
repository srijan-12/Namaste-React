import { useEffect, useState } from "react"
export const useRestroInfo = (id) =>{

    let[restroInfo, setRestroInfo] = useState(null);
    let[restroMenu, setRestroMenu] = useState(null);

    useEffect(()=>{
        fetchRestroInfoWithMenu(id);
    },[]);


    const fetchRestroInfoWithMenu = async(id) =>{
        const infoMenuAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=24.7913957&lng=85.0002336&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`

        const data = await fetch(infoMenuAPI);
        const jsonDataX = await data.json();
        setRestroInfo(jsonDataX.data.cards[2].card.card.info);
        const menu =jsonDataX.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards;
        const finalMenu = menu.slice(1);
        // console.log(finalMenu);
        // finalMenu.map((item)=> console.log(item.card.card.title));
        setRestroMenu(finalMenu);
    }

    return {restroInfo,restroMenu}

}