const proffys = [
    {
        name:"Kleybson Ferreira",
        avatar:"https://avatars0.githubusercontent.com/u/68382633?s=460&u=0710552a592fb51f9fb0f310732e6af3fb5ae234&v=4",
        whatsapp:"81985055255",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject:"Química",
        cost:"20",
        weekday:[0],
        time_from:[720],
        time_to:[1220]
        },

    {       name:"Diego Fernandes",
            avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
            whatsapp:"81985055255",
            bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
            subject:"Química",
            cost:"20",
            weekday:[6],
            time_from:[720],
            time_to:[1220]
        }
]
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]
const weekdays = [
    "Domingo",
   "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


//função que vai chamar a pagina principal
function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]

    
}



function pageLanding(req, res){
    return res.render("index.html")
}
//função que vai chamar a pagina study
function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })

}
//função que vai chamar a pagina give-classes
function pageGiveClasses(req, res){
    const data = req.query
    const isNoEmpty = Object .keys(data).length != 0
    //add data ao lista de proffys
    if (isNoEmpty){
        data.subject = getSubject(data.subject)

    proffys.push(data)

    return res.redirect("/study")
    }



    return res.render("give-classes.html", {subjects, weekdays })
}


const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

//config nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

//config de arquivos estaticos
server.use(express.static("public"))
//rotas de app
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5500)

