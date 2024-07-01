import React, {useEffect, useState} from "react";
import { apiGET, Sido, AbandonmentPublic } from "../../api/callAPI";

import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';
import dayjs from "dayjs";


// interface sidoCount extends Sido{
//     count : number
// }

const SidoList = () => {
    const [sidoList, setsidoList] = useState<Sido[]>([]);
    const [openList, setOpenList] = useState(false);

    useEffect(() => {
        return(() => {
            const data = apiGET<Sido,{numOfRows? : number}>('sido', {numOfRows : 30});
            data.then((sido) => {
                setsidoList(sido.response.body.items.item);
                setOpenList(true);
            })
            // data.then((res0) => {
            //     setsidoList(res0.response.body.items.item);
            //     res0.response.body.items.item.map((res1) => {
            //         const data = apiGET<AbandonmentPublic,{upr_cd? : string}>('abandonmentPublic', {upr_cd : res1.orgCd});
            //         setInterval(()=>{}, 1000);
            //         data.then((res2) => {
            //             setSidoCountList((lastList) => [...lastList, {
            //                 orgCd : res1.orgCd,
            //                 orgdownNm : res1.orgdownNm,
            //                 count : res2.response.body.totalCount?? 0,
            //             }]);
            //         }).then(() => {
            //             if (res0.response.body.items.item.at(-1) == res1) {
            //                 console.log('done');
            //                 setSidoCountList((lastList) => [...lastList.sort((n1, n2) => {
            //                     if (n1.count > n2.count) {
            //                         return -1;
            //                     }
            //                     if (n1.count < n2.count){
            //                         return 1;
            //                     }
            //                     return 0;
            //                 })])
            //                 setOpenList(true);
            //             }
            //         });
            //     });
            // })
        })
    }, []);

    return(
        <>
            <List 
            dense 
            sx={{ 
                width: '100%',
                maxWidth: 420,
                bgcolor: 'background.paper'
            }}
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                유기동물 현황 ({dayjs().format("YYYY-MM-DD")} 기준)
                </ListSubheader>
            }
            >
            {
                openList ? 
                sidoList?.map((res, idx) => {
                    return(
                    <ListItem
                    key={idx}
                    disablePadding
                    >
                            <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                variant="square"
                                src={process.env.PUBLIC_URL + `/logo/${res.orgCd}.png`}
                                sx={{width : "30px", height : "auto"}}
                                />
                            </ListItemAvatar>
                            <ListItemText primary={res.orgdownNm} />
                            <Badge badgeContent={res.totalCount} max={999}/>
                            </ListItemButton>
                    </ListItem>
                        // <div>{res.orgdownNm} | {res.orgCd} : {res.count}</div>
                    )
                }) : sidoList.map((_, idx) => {
                    return(
                        <ListItem
                    key={idx}
                    disablePadding
                    >
                            <ListItemButton>
                            <ListItemAvatar>
                                <Skeleton
                                variant="rounded"
                                // src={process.env.PUBLIC_URL + `/logo/${res.orgCd}.png`}
                                sx={{width : "60%"}}
                                />
                            </ListItemAvatar>
                            <Skeleton 
                            variant="text"
                            sx={{width : "80%"}}
                            />
                            <Skeleton 
                            variant="text"
                            sx={{width : "10%"}}
                            />
                            </ListItemButton>
                    </ListItem>
                    )
                })
            }
            </List>
            
        </>
    )
}

export default SidoList;