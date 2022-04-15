// โปรแกรมคำนวนเกรดมือใหม่
// ให้รับคำสั่งจากผู้ใช้
// เมื่อพิม 1 ให้้ตอบว่า 'คุณได้เกรด 4'
// เมื่อต้องการออกจากโปรแกรมให้พิม 0
// เมื่อพิม tae ให้แสดง popup ระบุตัวเลขแล้วเอาตัวเลขที่ระบุมาบวกกับ 10 แล้วตอบว่า (เลขที่บวกแล้ว)
// เพิ่มเติม ให้แสดงข้อความ ตัวเลขที่ระบุคือ (ตัวเลขที่ระบุ) และ ตัวเลขที่รวมคือ
/*
   ตัวอย่างผลลัพธ์
   
   ตัวเลขที่ระบุคือ 10
   ตัวเลขที่รวมคือ 20

   ก่อนที่จะบวกให้เก็บการบวกไว้ในตัวแปล total แล้วนำเอาตัวเลข total ไปแสดงผลรวม


*/
function example1() {
  console.log("โปรแกรมคำนวนเกรดมือใหม่"); // พิมข้อความ
  var input = prompt("กรุณาระบุคำสั่ง"); // รับค่าจากผู้ใช้
  if (input == 1) {
    // เงื่อนไข ถ้า input เป็น 1 ให้เข้าเงื่อนไข
    console.log("คุณได้เกรด 4");
  } else if (input == 0) {
    console.log("จบโปรแกรม");
  } else if (input == "tae") {
    var input2 = prompt("ระบุตัวเลข");
    console.log("ตัวเลขที่ระบุคือ", parseInt(input2));
    var total = parseInt(input2) + 10;
    console.log("ตัวเลขที่รวมครั้งที่1", total);
    total = total + 10;
    console.log("ตัวเลขที่รวมครั้งที่2", total);
    total += 10;
    console.log("ตัวเลขที่รวมครั้งที่3", total);
  } else {
    console.log("คุณระบุไม่ตรงเงื่อนไข"); //นอกเหนือเงื่อนไข
  }
}

function example2(){
    console.log("โปรแกรมคำนวนเกรดมือใหม่"); // พิมข้อความ
  var input = prompt("กรุณาระบุคำสั่ง"); // รับค่าจากผู้ใช้
  if (input == 1) {
    // เงื่อนไข ถ้า input เป็น 1 ให้เข้าเงื่อนไข
    console.log("คุณได้เกรด 4");
  } else if (input == 0) {
    console.log("จบโปรแกรม");
  } else if (input == "tae") {
    var input2 = prompt("ระบุตัวเลข");
    console.log("ตัวเลขที่ระบุคือ", parseInt(input2));
    var total = parseInt(input2) + 10;
    for (var i = 1; i <= 100; i++){
        total += 10;
        console.log("ตัวเลขที่รวมครั้งที่ "+i, total);
    }
  } else {
    console.log("คุณระบุไม่ตรงเงื่อนไข"); //นอกเหนือเงื่อนไข
  }

}

function example3(){
    
}

function example4(){
    
}
