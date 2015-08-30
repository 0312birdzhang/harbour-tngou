
var dataclass={
    "medical": [
        {
            "name": "药品信息",
            "apid":"drug"
        },
        {
            "name": "疾病信息",
            "apid":"disease"

        },
        {
            "name": "手术项目",
            "apid":"operation"
        },
        {
            "name": "检查项目",
            "apid":"check"
        },
        {
            "name": "病状查找",
            "apid":"symptom"
        },
        {
            "name":"科室分类",
            "apid":"department"
        },
        {
            "name":"身体部位",
            "apid":"place"
        },
        {
            "name": "医院门诊",
            "apid":"hospital"
        },
        {
            "name": "药店药房",
            "apid":"store"
        },
        {
            "name": "药厂药企",
            "apid":"surgery"
        }
    ],
    "health": [
        {
            "name": "健康资讯",
            "apid":"info"
        },
        {
            "name": "健康知识",
            "apid":"lore"
        },
        {
            "name": "健康一问",
            "apid":"ask"
        },
        {
            "name": "健康图书",
            "apid":"book"
        }
    ],
    "life": [

        {
            "name": "健康食品",
            "apid":"food"
        },
        {
            "name": "健康菜谱",
            "apid":"cook"
        },
        {
            "name": "地域城市",
            "apid":"area"
        },
        {
            "name": "社会热点",
            "apid":"top"
        },
        {
            "name": "新闻资讯",
            "apid": "news"
        }

    ]
}

function currentClass(classname){
    for(var i in dataclass[classname]){
     classmodel.append(dataclass[classname][i]);
    }
}
