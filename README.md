# Birthday CountDown 사용법

 ### 1. 해당 레파지토리를 clone 합니다.    
 

 ### 2. `script.js` 파일을 원하는 형식에 맞게 수정합니다. 


`script.js` 파일에서 이름, 태어난 해, 생일, 축하 메세지 부분을 수정합니다.    

   
 수정 가능한 변수들은 4가지 입니다. 각각의 변수에 원하는 값을 입력해주면 됩니다.
 * 이름(`yourName`) | 태어난 해(`yourBirthYear`) | 생일(`yourBirthday`) 
* 생일 축하 메세지(`customMsg`) : 아무것도 입력하지 않으면 ex)`000의 XX번째 생일을 축하해!`만 출력되며, 커스텀 축하 메세지를 작성하면 ex)`000의 XX번째 생일을 축하해! 내가 적은 커스텀 메세지`의 형식으로 출력됩니다.
    
    
<img width="400" alt="스크린샷 2021-11-02 오후 4 30 55" src="https://user-images.githubusercontent.com/73516688/139804096-68254556-6d2e-468c-917c-5f2cc76c00f0.png"> 


   <br> 
    
   > ‼️ 주의 ‼️ 생일을 입력할 때는 `January 1` 과 같은 형식을 반드시 지켜 입력해주어야 합니다.   
    
    ```javascript
    /* -------- 정보 입력 -------------- */
    /* 이름 | 태어난 해 |생일 | 메세지 입력 */
    let yourName = "김크크"; // 이름 입력
    let yourBirthYear = 1999; // 태어난 해
    let yourBirthday = "January 1"; // 생일 입력

    /* 생일 축하 메세지 입력은 기본출력 뒤에 붙는 메세지
        기본 출력 : yourName의 00번째 생일을 축하해!!

        - 메세지 내 이모티콘 사용 가능(Mac 기준)
    */
    let customMsg = "";
    /* ------------------------------- */
    ```
    
 ### 3. `./image` 폴더에 원하는 이미지를 넣어줍니다.    
 5초마다 새로운 이미지를 보여줍니다.
 
   > ⭐️ 반드시 이름은 `background[index].jpeg` 형식으로 지정해줍니다. ex)`background0.jpeg`


      
### 4. git pages로 배포하기
[git pages로 배포하기](https://songeunjung92.tistory.com/48)

---------------------------------         

### Update 계획
* 사용자 입력을 통한 자동 birthday countdown 구현(시간이 나면,,,,ㅎㅎ)
