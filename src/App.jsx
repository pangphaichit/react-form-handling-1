import "./App.css";
import { useState } from "react";

// เมื่อผู้ใช้งานเข้าหน้าเว็บไซต์ครั้งแรก หรือกดรีเฟรช ข้อความเริ่มต้นในกล่องสีเขียวฟ้าจะเป็น "Greeting Message"
// ผู้ใช้งานสามารถพิมพ์ข้อความทักทายเข้าไปใน Input ได้
// เมื่อผู้ใช้งานกดปุ่ม "Update text" ข้อความในกล่องสีเขียวฟ้า จะเปลี่ยนไปเป็นข้อความที่พิมพ์เข้ามาใน Input

function App() {
  const [display, updatDisplay] = useState("Greeting Message"); //**สำหรับปุ่ม Update Text */
  const [textInput, storeTextInput] = useState(""); //สำหรับแถบ input

  const handleUpdateButton = () => {
    updatDisplay(textInput);
  }; //ฟังก์ชั่นอัพเดท message ดึงข้อความจาก textinput ไปแสดงใน display

  const handleTextInput = (event) => {
    storeTextInput(event.target.value);
  }; //ฟังก์ชั่นบันทึก text รับ input มาเก็บใน state ชั่วคราว
  
  return (
    <div className="App">
      <div className="greeting-container">{display}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" onChange={handleTextInput} />
      </div>

      <div className="buttons">
        <button onClick={handleUpdateButton}>Update text</button>
      </div>
    </div>
  );
}

export default App;
