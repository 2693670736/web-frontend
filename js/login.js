// 获取表单元素和提交按钮
const form = document.getElementById('studentForm');
const submitButton = document.querySelector('input[type="submit"]');

// 表单提交事件处理程序
form.addEventListener('submit', function(e) {
  e.preventDefault(); // 阻止表单默认提交行为

  // 获取表单数据
  const subject = document.getElementById('subject').value;
  const score = document.getElementById('score').value;
  const rank = document.getElementById('rank').value;
  const province = document.getElementById('province').value;

  // 在此处可以根据表单数据执行相应的操作，如提交到后端进行处理或进行其他逻辑处理

  // 以下为示例，显示表单数据
  console.log('文理科：', subject);
  console.log('高考分数：', score);
  console.log('高考排名：', rank);
  console.log('省份：', province);

  // 跳转到另一个页面
  window.location.href = 'index.html';
});