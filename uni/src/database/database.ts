import * as sqlite3 from 'sqlite3'

export default class DataBaseInterface {
    //Создание или подключение к базе данных после инициализации класса
    constructor() { 
        this.db = new sqlite3.Database('./database.db',sqlite3.OPEN_READWRITE, (err) => { 
            if (err) { 
                console.log('Ошибка подключения к базе данных : ', err) 
            } else { 
                console.log('Подключен к базе данных') 
            } 
            this.initUsers()
            this.initBooks()
            })
    }
    db: sqlite3.Database;
    initUsers(){
        try{
            this.db.exec(`CREATE TABLE IF NOT EXISTS USER ( id INT AUTO_INCREMENT, email VARCHAR(255) NOT NULL, password VARCHAR(255), CONSTRAINT userPK PRIMARY KEY (id) ) `)
        } catch (e) {
            return e
        }
    }
    initBooks(){
        try{
            this.db.exec(`CREATE TABLE IF NOT EXISTS BOOK ( id INT AUTO_INCREMENT, name VARCHAR(255) NOT NULL, image_link VARCHAR(255), CONSTRAINT bookPK PRIMARY KEY (id) ) `)
        } catch (e) {
            return e
        }
    }
    async addUser(user: object){
        console.log(user)
        return this.db.run(`INSERT INTO USER(id, email, password) VALUES(null, ?, ?)`, [user['email'], user['password']])
    }
    
    async getUser(email: string){
        return this.db.run(`SELECT * FROM USER`, [])
    }

}