
// 로컬스토로지에 'todoList'라는 키값으로 저장된 데이터가 있는지 확인하여 (삼항연산자)
// true면 그 데이터 가져와서 JSON형식으로 파싱하여 todoList 에 저장(배열)
// flase면 빈 배열을 할당 '[]' 하여 todoList 변수에 저장
let todoList = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];

// 웹페이지의 모든 DOM요소가 로드된 뒤에 발생되는 이벤트 (window. 는 생략가능)
window.onload = function(){
    // drawTodoList함수를 호출하면서 ul(부모)태그와 로컬스토로지에서 불러온 데이터 보내줌
    drawTodoList(document.getElementsByClassName('todo-list')[0], todoList);
}


// input에 입력된 내용을 할일목록에 추가하기
function addTodo(){
    //input에 입력된 내용(값)을 가져와 변수에 넣어준다
    const todo = document.getElementById('search-input').value;

    // 혹 할일이 입력되지 않았다면 함수를 끝낸다.
    if (todo.replace(/ /g,"") === '')
    return;

    // 입력된 데이터를 객체화하여 todoList배열에 추가함 (push) 
    // date는 나중에 특정 데이터를 선택하기 위한 고유값으로 사용하기 위해서 넣어줌
    todoList.push({
        title : todo, 
        date : new Date()
    })

    // input창에 적혀있는 내용을 지워줌
    document.getElementById('search-input').value = '';

    // 완성된(기존+추가된) todoList배열을 JSON형식으로 변환하여 로컬스토로지에 저장함 (setItem)
    // setItem(key, value) : key값은 'todoList' /  나중에 로컬에 저장된 배열을 찾을때 사용할 키값
    localStorage.setItem('todoList', JSON.stringify(todoList))


    // 완성된 todoList 를 화면에 그려주기 위한 함수 호출
    drawTodoList(document.getElementsByClassName('todo-list')[0], todoList);
}


// 할일 목록 그리기
function drawTodoList(parent, list){

    // 불러온 태그(ul)내의 자식 요소들을 전부 지우기 (전체지우고 배열가져와서 처음부터 다시 그림)
    $(parent).empty();
    
    // list에 있는 배열의 크기만큼 반복 돌면서 
    for (let unit of list) {
        // 할일목록을 표시해줄 li태그 생성한 뒤 변수에 넣어줌
        const toDoLi = document.createElement('li');
        // toDoLi 요소에 'isDone' 이라는 사용자지정 속성을 추가하고 false 값 할당
        toDoLi.isDone = false;
        // 해당 unit의 title 값(할일내용)을 toDoLi(li)에 출력
        toDoLi.innerHTML = unit.title;
        // toDoLi 데이터를 parent(ul)태그의 자식으로 삽입
        parent.appendChild(toDoLi);



        //할일목록을 지워줄 버튼을 만들어서 li태그 자식노드로 추가하기

        // div 생성하여 변수에 넣기
        const removeToDoli = document.createElement('div');
        // 해당요소에 className, innerHTML 추가
        removeToDoli.className = 'todo-remove-btn';
        removeToDoli.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        // 해당 요소를 toDoLi(ul)태그의 자식으로 삽입
        toDoLi.appendChild(removeToDoli);


        // toDoLi(li)클릭될때마다 isDone값을 반대로 변경해줌
        toDoLi.onclick = function(ev){                
            ev.target.isDone = !ev.target.isDone;

            //isDone값에 따라서 done class를 부여해주거나 삭제해줌 (취소선 유무)
            if (ev.target.isDone) {
                ev.target.className = 'done';
            } else {
                ev.target.classList.remove('done');
            }
        }

       
        removeToDoli.onclick = function(ev){
            console.log(new Date(unit.date).getTime());
            removeEvent(ev);

            //ui에서 삭제(dom에서 제거)
            this.parentNode.remove();
          


            //filter메소드 => 배열에서 조건에 맞는 값만 추릴때 사용
            //특정 자료를 삭제할때 많이 사용한다.
            todoList = todoList.filter(function(data){
                let tmpDate = new Date(data.date).getTime();
                let unitTime = new Date(unit.date).getTime();
         
                return (tmpDate !== unitTime);
            })
            localStorage.setItem('todoList', JSON.stringify(todoList))
            console.log(todoList)
        }
    }

}

function removeEvent(ev){
    ev.preventDefault(); //이벤트의 기본동작을 중단한다.   return false;
    ev.stopPropagation(); //현재 이벤트가 상위로 전파되지 않도록 중단한다.
    ev.stopImmediatePropagation(); // 현재 이벤트가 상위뿐만아니라 현재레벨에 걸린 다른 이벤트도 동작하지 않도록 중단한다.

}