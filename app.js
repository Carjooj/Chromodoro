const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")
const post = require("./models/tabelas")

app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));


app.get("/", function (req, res) {
    post.tarefas.findAll().then(function (post) {
        res.render("chromodoro", { post })
    })
})

app.post("/addtarefa", function (req, res) {
    post.tarefas.create({
        nome: req.body.nometarefa,
        est_ciclo: req.body.estpomodoro,
        descricao: req.body.descricao,
        progresso: "Em andamento"
    }).then(function () {
        console.log("Tarefa Adicionada")
        res.redirect("/")
    }).catch(function (erro) {
        res.send("Falha ao cadastrar os dados" + erro)
    })
})

app.get("/excluirtarefa/:id_tarefa", function (req, res){
    const id = req.params.id_tarefa
    console.log(id)
    post.tarefas.destroy({
        where : {
            id_tarefa : id
        }
    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send("Erro ao excluir dados" + erro)
    })
})


app.get("/updatestatus/:id_tarefa", function (req, res){
    const id = req.params.id_tarefa

    post.tarefas.update({
        progresso : "Concluída"
    }, {
        where : {
            id_tarefa : id
        }
    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send("Erro ao atualizar: " + erro)
    })
})

app.get("/conta", function (req, res){
    res.render("conta")
})





app.listen(8081, function () {
    console.log("Rodando")
})