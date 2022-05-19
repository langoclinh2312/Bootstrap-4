// bắt sự kiện
function dropdow(dropdow_onclik, dropdow_togge, dropdow_class) {
    dropdow_onclik.onclick = function() {
            dropdow_togge.classList.toggle('open');
        }
        //  khởi tạo ra oncilck ẩn 
    for (let i = 0; i < dropdow_class.length; i++) {
        dropdow_class[i].onclick = function() {
            // lấy dữ liệu người dùng chọn gán lại lên dữ liệu cũ ()
            dropdow_onclik.innerHTML = this.textContent;
            // remove lại phần tử cũ
            for (let j = 0; j < dropdow_class.length; j++) {
                // remove xóa calss 
                dropdow_class[j].classList.remove('selected');
            }
            // add thêm calss vào phần tử 
            this.classList.add('selected');
            // toggle ko có thêm  class vào phần tử , có thì cắt 
            dropdow_togge.classList.toggle('open');

        }
    }
}

var list = document.getElementsByClassName("option");
dropdow(language_btn, language_list, list);

var option1 = document.getElementsByClassName('option1');
dropdow(Guests_btn, Guests_list, option1);


var option2 = document.getElementsByClassName('option2');
dropdow(Adult_btn, Adult_list, option2);

var option4 = document.getElementsByClassName('option4');
dropdow(Children_btn, Children_list, option4);