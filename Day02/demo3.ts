//JSON Object 
// key & value format 

let jsonObj={
    id:9,
    "fname":'Sumit',
    lname:'Raokhande'
}

// 1 dot operator
// 2 square operator

// 1 dot operator

// console.log(`
//     id          :: ${jsonObj.id}
//     First Name  :: ${jsonObj.fname}
//     Last Name   :: ${jsonObj.lname}
// `)

// Square Operator

// console.log(`
//     id          :: ${jsonObj["id"]}
//     First Name  :: ${jsonObj["fname"]}
//     Last Name   :: ${jsonObj["lname"]}
// `)

// Array of Object 
let arrObj=[
    {
        id:9,
        "fname":'Sumit',
        lname:'Raokhande',
        country:{
            cid:1,
            cname:'India'
        },
        month:["Jan",'March',"Dec"],
        result:[
            {
                subj:"M1",
                marks:40
            },
            {
                subj:"M2",
                marks:45
            },
            {
                subj:"M3",
                marks:50
            }
        ]
    },
    {
        id:6,
        "fname":'Kiran',
        lname:'Raokhande',
        country:{
            cid:2,
            cname:'USA'
        },
        month:["Feb",'Aug',"Nov"],
        result:[
            {
                subj:"M1",
                marks:50
            },
            {
                subj:"M2",
                marks:65
            },
            {
                subj:"M3",
                marks:70
            }
        ]
    },
    {
        id:3,
        "fname":'Spruha',
        lname:'Raokhande',
        country:{
            cid:3,
            cname:'Japan'
        },
        month:["May",'July',"OCT"],
        result:[
            {
                subj:"M1",
                marks:55
            },
            {
                subj:"M2",
                marks:75
            },
            {
                subj:"M3",
                marks:80
            }
        ]
    }
];

for(let i=0;i<arrObj.length;i++){

    console.log(`
        Id          :: ${arrObj[i].id}
        First Name  :: ${arrObj[i].fname}
        Last name   :: ${arrObj[i].lname}
        Country     :: ${arrObj[i].country.cname}
        Month       :: ${arrObj[i].month.join(" ")}
        -----------Result---------------
    `);

    // for(let j=0;j<arrObj[i].result.length;j++){
    //     console.log(`
    //             Subject :: ${arrObj[i].result[j].subj}
    //             Marks   :: ${arrObj[i].result[j].marks}
    //     `)

    // }

    arrObj[i].result.forEach((item)=>{
        console.log(`
                Subject :: ${item.subj}
                Marks   :: ${item.marks}
        `)
    })


}