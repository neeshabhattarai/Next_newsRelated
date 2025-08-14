import { DUMMY_NEWS } from '@/dummy-news';
import sql from "better-sqlite3";
const db=sql("news.db");

export function getAllNews() {
  const data=db.prepare("SELECT * FROM news ").all();
  // console.log("This is the data ")
  // console.log(data);
  return data  ;
}
export async function getById(id){
  const data=db.prepare("select * from news where id=@id").get({id});
  new Promise((res)=>setTimeout(() =>res, 2000))
 return data ;
}

export function getLatestNews() {
  return db.prepare("select * from news limit 3").all();
}

export function getAvailableNewsYears() {
  return db.prepare("SELECT DISTINCT strftime ('%Y',date) AS year FROM news ORDER BY year DESC").all().map((row)=>row.year);
}

export  function getAvailableNewsMonths(year) {
  const data=  db.prepare(`
    SELECT DISTINCT strftime('%m', date) AS month
    FROM news
    WHERE strftime('%Y', date) = @year
    ORDER BY month DESC
  `)
  .all({ year: String(year) })
  .map(row => row.month);


return data;}

export async function getNewsForYear(year) {
  const data= db.prepare("SELECT * from news where strftime('%Y',date)=@year").all({year:String(year)})
  ;
  await new Promise((res)=>setTimeout(res,2000));
  return data;
}

export async function getNewsForYearAndMonth(year, month) {
  console.log(year,month);
   const data= db.prepare("SELECT * FROM news WHERE strftime('%Y',date)=@year and strftime('%m',date)=@month ").get({year:String(year),month:String(month)});
   await new Promise((res)=>setTimeout(res,2000));
return [data];
}