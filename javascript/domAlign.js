{
    let coVN = document.getElementById('co-VN');
    let coAnh = document.getElementById("co-Anh");
    let tiengAnh = document.getElementById('tieng-Anh');
    let tiengViet = document.getElementById('tieng-Viet');
    tiengAnh.addEventListener('click', function () {
        coAnh.style.display = "inline";
        coVN.style.display = 'none';
    })

    tiengViet.addEventListener('click', function () {
        coAnh.style.display = "none";
        coVN.style.display = 'inline';
    })


    function cancelFunc() {
        let login = document.getElementById("login-area");
        login.style.display = 'none';
    }

    let login = document.getElementById("log-in");
    login.addEventListener('click', function () {
        let login1 = document.getElementById("login-area");
        login1.style.display = 'block';
    })

    let daXem = document.getElementById('da-xem');
    daXem.addEventListener('click', function () {
        let spDaXem = document.getElementById('sp-da-xem');
        if (daXem.style.right == '0px') {
            spDaXem.style.display = 'block';
            daXem.style.right = '400px';
        }
        else if (daXem.style.right == '400px') {
            spDaXem.style.display = 'none';
            daXem.style.right = '0px';
        }
    }
    )
}
{
    let ranking = document.getElementById('ranking-table');
    let ele = ranking.getElementsByClassName('list-group-item');
    let content;

    for (let i = 0; i < ele.length; i++) {
        ele[i].onmouseover = function () {
            content = this;
        }
    }

    ranking.addEventListener('mouseover', function () {
        for (let i = 0; i < ele.length; i++) {
            let mytarget = document.getElementById(ele[i].href.replace(window.location.href + '#', ''));
            mytarget.classList.remove('show');
            mytarget.classList.remove('active');
        }

        let dich = document.getElementById(content.href.replace(window.location.href + '#', ''));
        dich.classList.add('show');
        dich.classList.add('active');

    })
}

{
    function moveHorizontal() {
        let smallMover = document.getElementById('small-mover-father');
        smallMover.style.display = 'block';
    }

    function cancel() {
        let cancel = document.getElementById('small-mover-father');
        let body = document.getElementsByTagName('body');
        body[0].style.position = 'inherit';
        cancel.style.display = 'none';

    }

    function expend1(str) {
        let plus1 = document.getElementById('plus-1')
        let xemThem = document.getElementById('xem-them-1-small')
        if (str === 'fas fa-plus') {
            plus1.classList.remove('fa-plus');
            plus1.classList.add('fa-minus')
            xemThem.style.display = 'block'
        } else if (str === 'fas fa-minus') {
            plus1.classList.remove('fa-minus');
            plus1.classList.add('fa-plus')
            xemThem.style.display = 'none'
        }

    }
    
      
      let x = window.matchMedia("(max-width: 505px)");
      if (x.matches) { 
        let address = document.getElementById('address');
        let infoCompany = document.getElementById('info-company');
        address.classList.remove('col-4');
        infoCompany.classList.remove('col-8');
        loi.classList.remove('row');
     }
/*
    window.onclick = function (event) {
        let modal = document.getElementById('small-mover-father');
        if (event.target == modal) {
            console.log('1');
            modal.style.display = "none";
        }
    }
*/
}


{
    //thêm sao đánh giá
    let danhGia = document.getElementsByClassName("row-image-1");
    for (let i = 0;i<danhGia.length; i++) {
        let x = Math.floor(Math.random() * 5) + 1;
        danhGia[i].innerHTML = danhGia[i].innerHTML + '<br>';
        for (let j = 0; j<x;j++) {
            danhGia[i].innerHTML = danhGia[i].innerHTML + '<i class="fas fa-star checked"></i>';
        }
        for(let k=0;k<5-x;k++) {
            danhGia[i].innerHTML = danhGia[i].innerHTML + '<i class="fas fa-star"></i>';
        }
        danhGia[i].innerHTML = danhGia[i].innerHTML + '<span style="color: orange;font-size: 13px;margin-left: 5px;">(' + x + ')</span>';
    }
}
