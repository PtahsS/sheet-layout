
const addDetail = document.querySelector('.add-detail');
const addDetailBtn = document.querySelector('.add-detail__btn');
const addedDetailsList = document.querySelector('.added-details__list');
const btnSend = document.querySelector('.btn-send');

addDetail.addEventListener('change', (e)=> {
    e.preventDefault();
    const eventName = e.target.name;
    switch (eventName) {
        case "left-top-radius": 
            document.querySelector('.show-detail').style.borderTopLeftRadius = `${e.target.value / 2}px`;
            break;
        case "right-top-radius": 
            document.querySelector('.show-detail').style.borderTopRightRadius = `${e.target.value / 2}px`;
            break; 
        case "left-bottom-radius": 
            document.querySelector('.show-detail').style.borderBottomLeftRadius = `${e.target.value / 2}px`;
            break;
        case "right-bottom-radius": 
            document.querySelector('.show-detail').style.borderBottomRightRadius = `${e.target.value / 2}px`;
            break; 
        case "add-detail__width": 
            document.querySelector('.show-detail').style.width = `${e.target.value / 2}px`;
            break; 
        case "add-detail__height": 
            document.querySelector('.show-detail').style.height = `${e.target.value / 2}px`;
            break;           
        case "select-material":
        	document.querySelector('.show-detail').style.backgroundImage = `url("img/${e.target.value}.jpg")`
    }
})

/*Canvas
==================*/

		const canvas = document.querySelector("#canvas");
		const ctx = canvas.getContext('2d');
		let x = 10;
		let y = 10;
// 		ctx.rect(10, 10, 100, 100);
// ctx.fill();

addDetailBtn.addEventListener('click', (e) => {
	e.preventDefault();
	let detailWidth = document.querySelector('.add-detail__width').value;
	let detailHeight = document.querySelector('.add-detail__height').value;
	let leftTopRadius = document.querySelector('input[name="left-top-radius"]').value
	let rightTopRadius = document.querySelector('input[name="right-top-radius"]').value
	let leftBottomRadius = document.querySelector('input[name="left-bottom-radius"]').value
	let rightBottomRadius = document.querySelector('input[name="right-bottom-radius"]').value
	let edgeTop = document.querySelector('#edge-top').value
	let edgeRight = document.querySelector('#edge-right').value
	let edgeBottom = document.querySelector('#edge-bottom').value
	let edgeLeft = document.querySelector('#edge-left').value
	
	let li = document.createElement('li');
	li.classList.add("added-details__item");
	li.innerHTML = `H: ${detailHeight}, W: ${detailWidth}, LT: ${leftTopRadius}, RT: ${rightTopRadius}, LB: ${leftBottomRadius}, RB: ${rightBottomRadius}, <br>
					Edge: top: ${edgeTop}, right: ${edgeRight}, bottom: ${edgeBottom}, left: ${edgeLeft}`;
	addedDetailsList.appendChild(li);


	ctx.lineWidth = 1;
		//Верхняя сторона
	ctx.beginPath();       
	ctx.moveTo(x + leftTopRadius/2, y);
	ctx.lineTo(x + (detailWidth - rightTopRadius) / 2 , y);
	ctx.stroke(); 
		//Правая сторона
	ctx.beginPath();       
	ctx.moveTo(x + detailWidth/2, y + rightTopRadius/2);
	ctx.lineTo(x + detailWidth/2, y + (detailHeight - rightBottomRadius) / 2);
	ctx.stroke(); 
		//Нижняя сторона
	ctx.beginPath();       
	ctx.moveTo(x + leftBottomRadius/2, y + detailHeight / 2);
	ctx.lineTo(x + (detailWidth - rightBottomRadius) / 2, y + detailHeight  / 2);
	ctx.stroke();
		//Левая сторона
	ctx.beginPath();       
	ctx.moveTo(x, y + leftTopRadius / 2);
	ctx.lineTo(x, y + (detailHeight - leftBottomRadius) / 2);
	ctx.stroke();
		//Левый верхний угол
	ctx.beginPath();
	ctx.arc(x + leftTopRadius / 2, y + leftTopRadius / 2, leftTopRadius / 2, Math.PI*1.5, Math.PI, true);
	ctx.stroke();
		//Правый верхний угол
	ctx.beginPath();
	ctx.arc(x + (detailWidth - rightTopRadius) / 2, y + rightTopRadius / 2, rightTopRadius / 2, Math.PI*2, Math.PI*1.5, true);
	ctx.stroke();
		//Левый нижний угол
	ctx.beginPath();
	ctx.arc(x + leftBottomRadius / 2, y + (detailHeight - leftBottomRadius) / 2, leftBottomRadius / 2, Math.PI*1, Math.PI*.5, true);
	ctx.stroke();
		//Правый нижний угол
	ctx.beginPath();
	ctx.arc(x + (detailWidth - rightBottomRadius) / 2, y + (detailHeight- rightBottomRadius) / 2, rightBottomRadius / 2, Math.PI*.5, 0, true);
	ctx.stroke();

	x += detailWidth / 2 + 3;
	
	detailHeight = 0;
	detailWidth = 0;
	leftTopRadius = 0;
	rightTopRadius = 0;
	leftBottomRadius = 0;
	rightBottomRadius = 0;
	

	btnSend.innerHTML = "Отправить";
})

btnSend.addEventListener('click', (e) => {
	e.preventDefault();
	if (!!addedDetailsList.firstChild) {
		console.log('hi')
		btnSend.innerHTML = 'Успешно отправлено!'

	} else {
		console.log('fi')
		btnSend.innerHTML = 'Нечего отправлять!'
	}
})