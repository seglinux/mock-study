const { faker } = require("@faker-js/faker");
const fs= require('fs')
const options = {
  category: "animal",
  grayscale: true,
  blur: 1,
};
const imgInfo=[]
for(let i=0; i<10;i++){
  const imgUrl = faker.image.urlLoremFlickr(options);
  imgInfo.push({
    id:i+1,
    url:imgUrl,
    description: `Image ${i+1}`
  })
}
const jsonData = JSON.stringify({
  imgInfo
})
fs.writeFile('photo-db.json',jsonData,'utf-8',(err)=>{
  if(err){
    console.error('写入文件时出错:', err);
  }else{
    console.log('数据已成功写入文件');
  }
})


