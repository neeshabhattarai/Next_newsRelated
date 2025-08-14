const sql=require("better-sqlite3");
const {DUMMY_NEWS}=require("./dummy-news");
const db=sql("news.db");
db.prepare("CREATE TABLE IF NOT EXISTS news (id TEXT PRIMARY KEY UNIQUE, slug TEXT NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, date TEXT NOT NULL, content TEXT NOT NULL)").run();
 function insertDetails() {
    function insertData(news){
    db.prepare("INSERT INTO news values( @id, @slug, @title, @image, @date, @content)").run(news);
    }

    for(const news of DUMMY_NEWS){
        console.log(news);
        insertData(news);
    }
;
    
}

insertDetails();