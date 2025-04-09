// Todo 할 일 목록
{

  //! 타입 속성 정의
  // : Task 타입을 제네릭으로 정의
  type Task<T> = {
    id: number;
    content: T;
    completed: boolean;
  }
  
  //! TaskManager 클래스
  // : T 제네릭 타입의 할 일 목록을 관리
  class TaskManager<T> {
    // 1) 속성
    tasks: Task<T>[];
    nextId: number; // 다음 할 일에 할당할 고유 ID
  
    // 2) 생성자
    constructor() {
      this.tasks = [];
      this.nextId = 1;
    }
  
    // 3) 메서드
    addTask(content: T): void {
      this.tasks.push({
        id: this.nextId,
        content: content,
        completed: false
      });
  
      this.nextId++;
  
      this.updateTaskCount(); // 할 일 개수 업데이트
    }
  
    removeTask(id: number): void {
      this.tasks = this.tasks.filter(task => task.id !== id);
  
      this.renderTasks('task-list');
  
      this.updateTaskCount();
    }
  
    // 랜더링 할 컨테이너(ul 태그)의 ID를 매개변수로 전달
    renderTasks(taskListId: string): void {
      const taskList = document.getElementById(taskListId) as HTMLUListElement;
  
      taskList.innerHTML = '';
  
      this.tasks.forEach(task => {
        const li = document.createElement('li');
  
        li.textContent = `${task.content}`;
  
        // 삭제 버튼 생성
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
  
        deleteButton.onclick = () => {
          this.removeTask(task.id);
        };
  
        // deleteButton.addEventListener('click', () => {});
  
        // 완료 체크박스 추가
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
  
        // bool 속성 checked
        // : checked = true;
        // : checked = false;
        checkbox.checked = task.completed;
  
        // 체크 박스 상태 변경 시: checked 속성 변경 시
        checkbox.onchange = () => {
          task.completed = !task.completed;
          this.renderTasks(taskListId);
        }
  
        if (task.completed) { // 완료 시 스타일 변경
          li.style.textDecoration = 'line-through';
        }
  
        // 생성된 요소 추가
        li.appendChild(deleteButton);
  
        // A요소.insertBefor(B요소, A요소.firstChild);
        // : A요소 안에 B 요소를 삽입
        // - 내부의 첫 번째 요소보다 '전에' 앞선 배치
        li.insertBefore(checkbox, li.firstChild);
  
        taskList.appendChild(li);
      });
  
      this.updateTaskCount();
    }
  
    updateTaskCount() {
      const countElement = document.getElementById('task-count');
  
      if (countElement) {
        countElement.textContent = `할 일 개수: ${this.tasks.length}`;
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const taskManager = new TaskManager<string>();
  
    const addButton = document.getElementById('add-button') as HTMLButtonElement;
    const newTaskInput = document.getElementById('task-input') as HTMLInputElement;
  
    addButton.addEventListener('click', () => {
      if (newTaskInput.value.trim() !== '') {
        taskManager.addTask(newTaskInput.value);
        taskManager.renderTasks('task-list');
  
        newTaskInput.value = '';
      }
    })
  });
  
  // tsc main.ts
  }