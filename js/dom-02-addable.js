function add(container, resultComponent) {
  //function for add input box , count next title and cal
  const inputContainer = document.createElement('div'); //ตัวแปรสำหรับ input box แต่ละอัน
  inputContainer.classList.add('cmp-input-container');

  const label = document.createElement('label');
  inputContainer.append(label); //ยัด label ใส่ input container

  const title = document.createElement('b'); // ชื่อ input
  const input = document.createElement('input'); //ตัว input
  input.type = 'number';
  input.defaultValue = 0;
  input.required = true;

  label.append(title);
  label.append(input);
  //สร้าง input box เสร็จ
  container.append(inputContainer);
  const nextN = container.querySelectorAll('input[Type="number"]').length; //หาจำนวน input
  title.innerText = `Number ${nextN}`;

  input.addEventListener('change', () => {
    //คำนวณผลรวม
    const inputs = [...container.querySelectorAll('input[type="number"]')];
    const total = inputs.reduce((carry, em) => carry + em.valueAsNumber, 0);
    resultComponent.value = total;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // run script when dom เสร็จ
  const inputsContainer = document.querySelector('.cmp-inputs-container');
  const resultComponent = document.querySelector('output.cmp-result');

  document.querySelector('.cmd-add-input').addEventListener('click', () => {
    //event เมื่อ click ปุ่ม input
    add(inputsContainer, resultComponent); //เรียก function
  });
  add(inputsContainer, resultComponent); // for the default
});
