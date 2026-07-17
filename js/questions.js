const questions = [

{
    category: "외모",

    question: "1. 당신의 얼굴은 몇점입니까?",

    image: "",

    answers: [
        { text: "10점", score: 25 },
        { text: "7~9점", score: 100 },
        { text: "4~6점", score: 75 },
        { text: "1~3점", score: 50 },
        { text: "0점", score: 0 }
    ]
},

{
    category: "외모",

    question: "2. 당신의 키는 몇 cm입니까?",

    image: "",

    answers: [
        { text: "180cm 이상", score: 100 },
        { text: "176~179cm", score: 67 },
        { text: "172~175cm", score: 33 },
        { text: "171cm 이하", score: 0 }
    ]
},

{
    category: "외모",

    question: "3. 당신의 몸무게는 몇 kg입니까?",

    image: "",

    answers: [
        { text: "80kg 이상", score: 0 },
        { text: "79~73kg", score: 67 },
        { text: "72~66kg", score: 33 },
        { text: "65kg 이하", score: 33 }
    ]
},

{
    category: "외모",

    question: "4. 당신은 어떤 동물상입니까?",

    image: "",

    twoColumn: true,

    answers: [
        { text: "강아지상", score: 67 },
        { text: "고양이상", score: 78 },
        { text: "햄스터상", score: 44 },
        { text: "토끼상", score: 33 }, 
        { text: "돼지상", score: 0 }, 
        { text: "공룡상", score: 56 },
        { text: "여우상", score: 89 },
        { text: "말상", score: 22 },
        { text: "곰상", score: 11 },
        { text: "뱀상", score: 100 }
    ]
},

{
    category: "외모",

    question: "5. 당신은 몇 가지가 해당됩니까?",

    description:
    "❤ 몸에 점이 많다\n\
     ❤ 덧니가 있다\n\
     ❤ 보조개가 있다\n\
     ❤ 귀를 움직일 수 있다\n\
     ❤ 얼굴/귀가 잘 빨개진다\n\
     ❤ 혀가 길다\n\
     ❤ 귀가 크다",

    image: "",

    answers: [
        { text: "없음", score: 0 },
        { text: "1가지", score: 33 },
        { text: "2~3가지", score: 67 },
        { text: "4가지 이상", score: 100 }
    ]
},

{
    category: "외모",

    question: "6. 당신의 피부색은 어떤 편입니까?",

    image: "",

    answers: [
        { text: "하얗고 투명하다", score: 0 },
        { text: "하얀편이다", score: 25 },
        { text: "보통이다", score: 75 },
        { text: "까만편이다", score: 100 },
        { text: "까맣고 구릿빛이다", score: 50 }
    ]
},

{
    category: "외모",

    question: "7. 당신은 어떤 체형입니까?",

    image: "",

    answers: [
        { text: "온 몸이 마르고 연약해보인다", score: 14 },
        { text: "슬렌더 스타일이며 잔근육을 가졌다", score: 86 },
        { text: "몸이 탄탄하고 근육질이다", score: 100 },
        { text: "보디빌더 수준의 근육몬이다", score: 57 },
        { text: "평범하다", score: 71 },
        { text: "평범한데 배가 조금 나왔다", score: 43 },
        { text: "통통하고 동글동글하다", score: 29 },
        { text: "뚱뚱하고 여유증이 있다", score: 0 }
    ]
},

{
    category: "외모",

    question: "8. 당신의 헤어스타일은 무엇입니까?",

    image: "",

    answers: [
        { text: "장발 / 울프컷 / 레이어드컷", score: 83 },
        { text: "투블럭 / 크롭컷 / 대머리", score: 0 },
        { text: "쉐도우펌 / 베이비펌 / 히피펌", score: 50 },
        { text: "애즈펌 / 가르마펌 / 리프컷", score: 67 },
        { text: "가일컷 / 드롭컷 / 아이비리그컷", score: 33 },
        { text: "시스루컷 + 직모 / 다운펌", score: 100 },
        { text: "대충 동네 미용실에 가서 아무거나 한다", score: 17 }
    ]
},

{
    category: "외모",

    question: "9. 당신과 가장 적합한 것은 무엇입니까?",

    image: "",

    answers: [
        { text: "넓은 어깨", score: 86 },
        { text: "잘생긴 얼굴", score: 29 },
        { text: "고른 치열", score: 43 },
        { text: "예쁜 손/발", score: 14 },
        { text: "모델같은 비율", score: 57 },
        { text: "멋진 근육/복근", score: 71 },
        { text: "큰 키", score: 100 },
        { text: "없음", score: 0 }
    ]
},

{
    category: "외모",

    question: "10. 당신은 옷을 잘 입는 편입니까?",

    image: "",

    answers: [
        { text: "패션에 관심도 많고 잘 입는 편이다", score: 100 },
        { text: "유튜브를 보고 따라입거나 무신사를 이용한다", score: 75 },
        { text: "그냥 깔끔하게 입는 편이다", score: 50 },
        { text: "패션에 대해 잘 모르고 관심이 없다", score: 25 },
        { text: "엄마가 사준 거 입는다", score: 0 }
    ]
},

{
    category: "성격",

    question: "11. 당신의 MBTI는 무엇입니까?",

    image: "",

    answers: [
        { text: "INFP/ENFP", score: 100 },
        { text: "INTJ/ENTJ", score: 57 },
        { text: "INFJ/ENFJ", score: 86 },
        { text: "INTP/ENTP", score: 71 },
        { text: "ISFJ/ESFJ", score: 29 },
        { text: "ISTJ/ESTJ", score: 14 },
        { text: "ISTP/ESTP", score: 0 },
        { text: "ISFP/ESFP", score: 43 }
    ]
},

{
    category: "성격",

    question: "12. 당신은 아래 상황에서 어떤 행동을 할 것 같습니까?",

    description: "상황 : 당신은 유예정과 함께 유명 맛집에 가게 되었습니다. 1시간을 넘게 기다려 겨우 들어온 식당, 직원은 매우 불친절합니다. 심지어 주문한 음식과 가격은 같지만 완전히 다른 음식이 나왔습니다.",

    image: "",

    answers: [
        { text: "어쩔 수 없지. 가격도 똑같고 배고프니깐 그냥 먹자.", score: 80 },
        { text: "미친 거 아니야? 가게 다 때려부숴버려. 내가 오늘 누구 하나 담근다.", score: 40 },
        { text: "사장님... 여기 음식이.... 아.. 예정아 그냥 먹자....ㅜㅠ", score: 0 },
        { text: "저기요. 여기 이거 환불해주세요. 예정아 우리 그냥 다른 곳 가서 먹자.", score: 20 },
        { text: "사장님~ 여기 음식이 잘못 나왔는데 다시 주시겠어요?", score: 100 },
        { text: "아까 예정이가 고른 거 다시 시키자! 내가 2개 먹을게!!!", score: 60 }

    ]
},

{
    category: "성격",

    question: "13. 당신이 이성에게 가장 많이 들은 말은 무엇입니까?",

    image: "",

    answers: [
        { text: "착하다 / 순수하다 / 바보같다", score: 20 },
        { text: "까칠하다 / 무뚝뚝하다 / 무섭다", score: 0 },
        { text: "다정하다 / 섬세하다 / 설렌다", score: 100 },
        { text: "지적이다 / 현실적이다 / 계산적이다", score: 40 },
        { text: "귀엽다 / 상냥하다 / 애교가 많다", score: 80 },
        { text: "멋있다 / 남자답다 / 기댈 수 있다", score: 60 }
    ]
},

{
    category: "성격",

    question: "14. 당신은 얼마나 잘 웁니까?",

    image: "",

    answers: [
        { text: "슬픈 것을 보면 눈물이 줄줄 난다", score: 100 },
        { text: "가끔씩 슬픈 일이 있을 때 운다", score: 67 },
        { text: "잘 울지 않는 편이다", score: 0 },
        { text: "사나이는 울지 않는다", score: 33 }
    ]
},

{
    category: "성격",

    question: "15. 당신은 사회성이 뛰어납니까?",

    image: "",

    answers: [
        { text: "모르는 사람에게도 넉살 좋게 먼저 말을 건다", score: 0 },
        { text: "회사, 학교, 가정에서 다수의 사람들과 원만하게 잘 지낸다", score: 75 },
        { text: "친한 사람과는 잘 대화하지만 그 외는 조금 불편하다", score: 100 },
        { text: "대화하는 것은 좋아하지만 조금 서툴다", score: 50 },
        { text: "사람이 싫고 혐오스럽다", score: 25 }
    ]
},

{
    category: "성격",

    question: "16. 당신은 공감능력이 뛰어납니까?",

    image: "",

    answers: [
        { text: "나는 나고 너는 너. 귀찮게 하지 말고 꺼져.", score: 0 },
        { text: "맞장구는 쳐주고 있지만 나는 잘 이해하지 못하겠네...", score: 25 },
        { text: "머리로 이해는 해. 근데 공감은 안돼.", score: 75 },
        { text: "나도 그런 적 있어서 잘 알지. 속상했겠다.", score: 50 },
        { text: "헐 어떡해 너무 슬퍼... 내 마음이 막 찢어져 ㅜㅠ", score: 100 }
    ]
},

{
    category: "성격",

    question: "17. 당신의 잘못으로 유예정과 싸웠을 때 당신은 어떤 행동을 할 것 같습니까?",

    image: "",

    answers: [
        { text: "연락이 먼저 올 때까지 생각을 정리하며 기다린다", score: 50 },
        { text: "애교로 유예정의 화를 푼다", score: 83 },
        { text: "자신의 생각과 감정, 당시 상황을 솔직하게 말하고 진지하게 사과한다", score: 100 },
        { text: "미안하다고 화가 풀릴 때까지 사과하며 매달린다", score: 33 },
        { text: "가슴 만질래...?", score: 67 },
        { text: "아무일도 없었던 것처럼 친근하게 다가간다", score: 17 },
        { text: "에라 모르겠다! 친구들과 게임 한 판 한다", score: 0 }
    ]
},

{
    category: "성격",

    question: "18. 당신은 애교가 많습니까?",

    image: "",

    answers: [
        { text: "애교가 왕왕 넘치는 귀욤 깜찍 발랄 큐티 사랑둥이다", score: 67 },
        { text: "여자친구한테는 애교가 넘치지만 밖에선 상남자다", score: 100 },
        { text: "애교는 부끄럽지만 그래도 조금은 한다", score: 33 },
        { text: "남자가 애교? 꼬추 떼라", score: 0 }
    ]
},

{
    category: "성격",

    description:
    "1. 바람을 피운 적이 있다\n\
     2. 게임을 할 때나 친구를 만날 때 욕설을 사용한다\n\
     3. 주변에 쓰레기통이 없으면 길바닥에 쓰레기를 버린다\n\
     4. 무단횡단을 5번 이상 해본 적이 있다\n\
     5. 사람을 때리거나 몸싸움을 한 적이 있다\n\
     6. 어른, 아이, 동물, 직원 등 약자를 막 대하는 편이다\n\
     7. 디시, 일베, 펨코, 루리웹 등의 커뮤니티를 자주 이용한다",

    image: "",

    answers: [
        { text: "없음", score: 100 },
        { text: "1~2가지", score: 67 },
        { text: "3~4가지", score: 33 },
        { text: "5가지 이상", score: 0 }
    ]
},

{
    category: "성격",

    question: "20. 당신은 연애를 할 때 어떤 애착유형입니까?",

    image: "",

    answers: [
        { text: "회피형 - 감정 표현이 어렵다. 상대방과 너무 가까워지는 것이 불편하다. 감정싸움이 피곤하고 싫다.", score: 25 },
        { text: "불안형 - 버림받을까봐 무섭다. 상대방의 말에 민감하게 반응하며 상처를 자주 받는다. ", score: 100 },
        { text: "안정형 - 상대방과 적당한 거리를 유지하며 신뢰를 가진다. 상대방에게 쉽게 휘둘리지 않는다.", score: 75 },
        { text: "무시형 - 상대방에게 관심이 적고 개인주의적이다. 자신의 대해서는 긍정적이지만 상대방에겐 부정적이다.", score: 0 },
        { text: "집착형 - 상대방을 독점하고 싶어한다. 자신의 대해서는 부정적이며 상대방에게 지나치게 의존한다.", score: 50 }
    ]
},

{
    category: "가치관",

    question: "21. 당신의 우선순위 1위는 무엇입니까?",

    image: "",

    answers: [
        { text: "꿈", score: 29 },
        { text: "돈", score: 86 },
        { text: "사랑", score: 100 },
        { text: "우정", score: 14 },
        { text: "명예", score: 0 },
        { text: "가족", score: 43 },
        { text: "건강", score: 57 },
        { text: "행복", score: 71 }
    ]
},

{
    category: "가치관",

    question: "22. 당신이 직업을 선택할 때 가장 중요하게 생각하는 것은 무엇입니까?",

    image: "",

    answers: [
        { text: "높은 연봉", score: 50 },
        { text: "사회적 지위", score: 25 },
        { text: "자신의 꿈", score: 0 },
        { text: "유연한 근무 환경", score: 75 },
        { text: "안정적인 직장", score: 100 }
    ]
},

{
    category: "연애관",

    question: "23. 당신은 주에 몇 번 데이트가 적당하다고 생각합니까?",

    image: "",

    answers: [
        { text: "1-2번", score: 75 },
        { text: "3-4번", score: 50 },
        { text: "5번 이상", score: 25 },
        { text: "시간 날 때마다", score: 100 },
        { text: "전혀 하지 않음", score: 0 }
    ]
},

{
    category: "연애관",

    question: "24. 당신은 어떤 데이트를 선호합니까?",

    image: "",

    answers: [
        { text: "멀리 여행 다니며 다양한 추억 쌓기", score: 55 },
        { text: "공부하고 자기개발하며 함께 성장하기", score: 36 },
        { text: "집에서 뒹굴뒹굴하며 넷플릭스 보고 과자먹기", score: 100 },
        { text: "다른 친구들도 불러서 큰 모임하기", score: 0 },
        { text: "영화관-카페-밥 정석 데이트 하기", score: 64 },
        { text: "맛집이나 핫플 놀러가서 사진찍기", score: 82 },
        { text: "자연 속에서 산책하거나 등산/캠핑하기", score: 18 },
        { text: "한 장소에 같이 있지만 각자 할일 하기", score: 27 },
        { text: "색다르고 새로운 경험 하기", score: 73 },
        { text: "운동하거나 스포츠 경기 관람하기", score: 9 },
        { text: "뭘 하든지 다 좋으니 함께 많은 시간 붙어있기", score: 91 },
        { text: "번식활동", score: 45 }
    ]
},

{
    category: "연애관",

    question: "25. 당신은 연애를 몇 번 해봤습니까?",

    image: "",

    answers: [
        { text: "모태솔로", score: 67 },
        { text: "1~3번", score: 100 },
        { text: "4~6번", score: 33 },
        { text: "7번 이상", score: 0 }
    ]
},

{
    category: "결혼관",

    question: "26. 당신은 자녀를 몇명 가지고 싶습니까?",

    image: "",

    answers: [
        { text: "0명", score: 100 },
        { text: "1명", score: 33 },
        { text: "2명", score: 67 },
        { text: "3명 이상", score: 0 }
    ]

},

{
    category: "결혼관",

    question: "27. 당신은 어떤 결혼식을 선호합니까?",

    image: "",

    answers: [
        { text: "일반적인 서양식 결혼식", score: 100 },
        { text: "교회나 성당에서 작은 결혼식", score: 60 },
        { text: "한복 입고 한국 전통 결혼식", score: 20 },
        { text: "야외에서 자유로운 결혼식", score: 40 },
        { text: "결혼식 안 하고 돈 아끼기", score: 80 },
        { text: "비혼주의", score: 0 }
    ]
},

{
    category: "결혼관",

    question: "28. 당신이 원하는 결혼 생활은 무엇입니까?",

    image: "",

    answers: [
        { text: "서로 열심히 일해서 재산 마련하고 노후 준비하기", score: 33 },
        { text: "자녀를 키우며 단란한 가정 꾸리기", score: 67 },
        { text: "서로를 사랑하고 존중하며 즐겁게 살기", score: 100 },
        { text: "결혼은 하였지만 독립적인 삶 유지하기", score: 0 }
    ]
},

{
    category: "결혼관",

    question: "29. 결혼 후 집안일은 어떻게 나누고 싶습니까?",

    image: "",

    answers: [
        { text: "한 명이 돈을 벌면 남은 한 명이 집안일을 한다.", score: 25 },
        { text: "각자 잘 하는 집안일로 분담하여 한다", score: 75 },
        { text: "일주일에 한 번 시간을 내어 같이 한다", score: 100 },
        { text: "집안일은 여자가 하는 게 맞다", score: 0 },
        { text: "돈을 열심히 벌어서 가정부를 고용한다", score: 50 }
    ]
},

{
    category: "결혼관",

    question: "30. 당신의 자녀가 심각한 금쪽이라면 어떻게 하겠습니까?",

    image: "",

    answers: [
        { text: "기계든 사람이든 때려서 고치는 게 맞다", score: 50 },
        { text: "넘치는 사랑과 관심으로 키운다", score: 0 },
        { text: "자녀를 버리고 다른 자녀를 키운다", score: 25 },
        { text: "전문가의 도움을 받는다", score: 75 },
        { text: "부부가 같이 협력하여 올바른 교육을 하려고 노력한다", score: 100 }
    ]
},

{
    category: "취향",

    question: "31. 당신은 어떤 음식을 좋아합니까?",

    image: "",

    answers: [
        { text: "한식", score: 100 },
        { text: "양식", score: 60 },
        { text: "일식", score: 40 },
        { text: "중식", score: 20 },
        { text: "동남아식", score: 80 },
        { text: "멕시코식", score: 0 }
    ]
},

{
    category: "취향",

    question: "32. 당신은 어떤 고기를 좋아합니까?",

    image: "",

    answers: [
        { text: "돼지고기", score: 60 },
        { text: "소고기", score: 40 },
        { text: "닭고기", score: 100 },
        { text: "양고기", score: 80 },
        { text: "오리고기", score: 20 },
        { text: "그 외", score: 0 }
    ]
},

{
    category: "취향",

    question: "33. 당신은 매운 음식을 잘 먹습니까?",

    image: "",

    answers: [
        { text: "튀김우동 정도", score: 0 },
        { text: "진순이 정도", score: 25 },
        { text: "신라면 정도", score: 50 },
        { text: "틈새라면 정도", score: 75 },
        { text: "불닭볶음면 정도", score: 100 }
    ]
},

{
    category: "취향",

    question: "34. 당신은 어떤 영화 장르를 좋아합니까?",

    image: "",

    answers: [ 
        { text: "추리/미스터리", score: 57 },
        { text: "로맨스/코미디", score: 86 },
        { text: "스릴러/공포", score: 100 },
        { text: "범죄/느와르", score: 43 },
        { text: "SF/판타지", score: 14 },
        { text: "감동/가족", score: 71 },
        { text: "액션", score: 29 },
        { text: "영화를 안 봄", score: 0 }
    ]
},

{
    category: "취향",

    question: "35. 당신은 어떤 음악 장르를 좋아합니까?",

    image: "",

    answers: [
        { text: "발라드", score: 78 },
        { text: "힙합", score: 100 },
        { text: "인디", score: 44 },
        { text: "락/메탈", score: 11 },
        { text: "제이팝", score: 89 },
        { text: "케이팝", score: 33 },
        { text: "팝송", score: 56 },
        { text: "클래식", score: 67 },
        { text: "재즈", score: 22 },
        { text: "음악을 안 들음", score: 0 }
    ]
},

{
    category: "취향",

    question: "36. 당신은 어떤 게임 장르를 좋아합니까?",

    image: "",

    answers: [
        { text: "RPG/MMORPG", score: 33 },
        { text: "FPS/TPS", score: 78 },
        { text: "스팀", score: 89 },
        { text: "전략", score: 44 },
        { text: "스포츠", score: 22 },
        { text: "퍼즐", score: 67 },
        { text: "시뮬레이션", score: 56 },
        { text: "로그라이크", score: 11 },
        { text: "거의 다 함", score: 100 },
        { text: "게임을 안 함", score: 0 }
    ]
},

{
    category: "취향",

    question: "37. 당신은 어떤 과목을 좋아합니까?",

    image: "",

    answers: [
        { text: "국어", score: 100 },
        { text: "수학", score: 89 },
        { text: "과학", score: 44 },
        { text: "사회", score: 0 },
        { text: "역사", score: 11 },
        { text: "영어", score: 78 },
        { text: "체육", score: 56 },
        { text: "미술", score: 22 },
        { text: "음악", score: 33 },
        { text: "제2외국어", score: 67 }
    ]
},

{
    category: "취향",

    question: "38. 당신은...",

    image: "",

    answers: [
        { text: "낮져밤이", score: 100 },
        { text: "낮이밤져", score: 50 },
        { text: "낮져밤져", score: 75 },
        { text: "낮이밤이", score: 25 },
        { text: "엥 그게 뭐죠?", score: 0 },
    ]
},

{
    category: "취향",

    question: "39. 당신은 어떤 연락 방식을 좋아합니까?",

    image: "",

    answers: [
        { text: "카톡으로 틈틈이 연락하기", score: 40 },
        { text: "하루에 한 번 전화로 수다떨기", score: 60 },
        { text: "디엠으로 심심할 때 릴스 보내기", score: 20 },
        { text: "적절하게 섞어서 사용하기", score: 80 },
        { text: "난 다 좋아! 완전 칼답!", score: 100 },
        { text: "중요한 일 아니면 연락하기 귀찮아..", score: 0 }
    ]
},

{
    category: "취향",

    question: "40. 당신은 술을 잘 마십니까?",

    image: "",

    answers: [
        { text: "소주 3잔", score: 100 },
        { text: "소주 반병 ~ 한 병 ", score: 83 },
        { text: "소주 한 병 반 ~ 두 병", score: 67 },
        { text: "소주 두 병 반 ~ 세 병", score: 50 },
        { text: "소주 세 병 반 이상", score: 33 },
        { text: "다른 술을 선호", score: 17 },
        { text: "술을 안 마심", score: 0 }
    ]
},

{
    category: "진짜 중요한 문제",

    question: "41. 당신의 샤워 주기는 어떻게 됩니까?",

    image: "",

    answers: [
        { text: "하루에 두 번", score: 67 },
        { text: "하루에 한 번", score: 100 },
        { text: "2일에 한 번", score: 33 },
        { text: "집에만 있으면 거의 안 씻음", score: 0 }
    ]
},

{
    category: "진짜 중요한 문제",

    question: "42. 당신은 몸에 털이 많습니까?",
    image: "",

    answers: [
        { text: "배털, 가슴털 있음", score: 0 },
        { text: "팔, 다리털 두꺼움", score: 50 },
        { text: "겨드랑이랑 중요 부위만 두꺼움", score: 100 },
        { text: "털들이 다 얇음", score: 25 },
        { text: "왁싱 주기적으로 받음", score: 75 }
    ]
},

{
    category: "진짜 중요한 문제",

    question: "43. 당신은 일본 애니메이션을 좋아합니까?",

    image: "",

    answers: [
        { text: "원나블 같은 유명한 애니만 봤다", score: 50 },
        { text: "음지/씹덕/마이너 애니도 많이 봤다", score: 100 },
        { text: "애니메이션 안 좋아한다", score: 0 }
    ]
},

{
    category: "진짜 중요한 문제",

    question: "44. 당신은 국내 힙합을 좋아합니까?",

    image: "",

    answers: [
        { text: "쇼미 좋아한다", score: 0 },
        { text: "래퍼 좋아한다", score: 25 },
        { text: "국힙 좋아한다", score: 50 },
        { text: "하루에 힙합 4시간 이상 듣는다", score: 75 },
        { text: "노래방 가서 힙합 부를 수 있다", score: 100 }
    ]
},

{
    category: "진짜 중요한 문제",

    question: "45. 당신은 유예정과 하루에 게임을 최대 몇 시간 같이 해줄 수 있습니까?",

    image: "",

    answers: [
        { text: "게임 안 함", score: 0 },
        { text: "1~3시간", score: 33 },
        { text: "4~6시간", score: 67 },
        { text: "7시간 이상", score: 100 }
    ]
},

{
    category: "진짜 중요한 문제",

    question: "46. 당신은 군필자입니까?",

    image: "",

    answers: [
        { text: "전역", score: 100 },
        { text: "공익/면제", score: 50 },
        { text: "가기 전", score: 0 }
    ]
},

{
    category: "진짜 중요한 문제",

    question: "47. 당신은 아르바이트 경험이 있습니까?",
    
    description:"3개월 이상 한 곳에서 근로한 기준",

    image: "",

    answers: [
        { text: "한 번도 없음", score: 0 },
        { text: "학원/과외/인포/간단 사무 등 비교적 쉬운 알바 해봄", score: 33 },
        { text: "쿠팡/고기집/배달/주방/설거지 등 비교적 힘든 알바 해봄", score: 67 },
        { text: "다양한 알바를 아주 많이 해봄", score: 100 },
    ]
},

{
    category: "진짜 중요한 문제",

    question: "48. 당신은 현재 자취를 하고 있습니까?",

    image: "",

    answers: [
        { text: "네", score: 100 },
        { text: "아니요", score: 0 },
        { text: "지금은 아니지만 전에 1년 이상 자취를 해본 경험이 있음", score: 50 }
    ]
},

{
    category: "진짜 중요한 문제",

    question: "49. 당신은 몇살입니까?",

    image: "",

    answers: [
        { text: "07년생 이하", score: 33 },
        { text: "06~04년생", score: 67 },
        { text: "03~99년생", score: 100 },
        { text: "98년생 이상", score: 0 }
    ]
},

{
    category: "진짜 중요한 문제",

    question: "50. 당신은 분리배출을 잘 합니까? (검색 금지)",

    description: "문제 : 휴지 덩어리, 작은 플라스틱, 계란 껍데기, 바나나껍질, 종이는 일반 쓰레기이고 작은 생선 뼈, 요거트, 냉동과일, 파인애플, 상한 고기는 음식물 쓰레기이다. ",

    image: "",

    answers: [
        { text: "맞다", score: 0 },
        { text: "아니다", score: 100 },
        { text: "잘 모르겠지만 배울 생각이 있다", score: 50 }
    ]
},

{
    category: "진짜 중요한 문제",

    question: "51. 당신은 정말 친한 친구가 몇 명 있습니까?",

    image: "",

    answers: [
        { text: "0명", score: 67 },
        { text: "1~2명", score: 100 },
        { text: "3~4명", score: 33 },
        { text: "5명 이상", score: 0 }
    ]
},

{
    category: "진짜 중요한 문제",

    question: "52. 당신은 겁이 많습니까?",

    image: "",

    answers: [
        { text: "무서워서 덜덜떨고 심장이 터질 것 같다", score: 75 },
        { text: "혼자 밤에 공포영화 보는 건 못한다", score: 100 },
        { text: "볼 수는 있는데 귀신이나 잔인한 장면은 무섭다", score: 50 },
        { text: "갑툭튀만 아니면 미동도 없다", score: 25 },
        { text: "하나도 안 무섭다", score: 0 }
    ]
},

{
    category: "진짜 중요한 문제",

    question: "53. 당신의 고향은 어디입니까?",

    image: "",

    answers: [
        { text: "서울/인천/경기도", score: 100 },
        { text: "강원도", score: 60 },
        { text: "충청도", score: 20 },
        { text: "전라도", score: 0 },
        { text: "경상도", score: 80 },
        { text: "제주도", score: 40 }
    ]
},

{
    category: "진짜 중요한 문제",

    question: "54. 당신은 면허가 있습니까?",

    image: "",

    answers: [
        { text: "1종 대형", score: 25 },
        { text: "1종 보통/특수", score: 100 },
        { text: "2종 보통", score: 75 },
        { text: "2종 소형/원동기장치자전거", score: 50 },
        { text: "면허 없음", score: 0 }
    ]
},

{
    category: "진짜 중요한 문제",

    question: "55. 당신은 애완동물을 키웁니까?",

    image: "",

    answers: [
        { text: "네", score: 0 },
        { text: "아니요", score: 100 }
    ]
},

{
    category: "진짜 중요한 문제",

    question: "56. 당신은 타자가 빠릅니까?",

    image: "",

    answers: [
        { text: "타자가 빠르다", score: 50 },
        { text: "타자도 빠르고 컴퓨터도 잘 다룬다", score: 100 },
        { text: "타자 느리고 컴맹이다", score: 0 }
    ]
},

{
    category: "진짜 중요한 문제",

    question: "57. 당신은 손과 발이 큽니까?",

    image: "",

    answers: [
        { text: "네", score: 50 },
        { text: "아니요", score: 0 },
        { text: "손 크고 예뻐요", score: 100 }
    ]
},

{
    category: "진짜 중요한 문제",

    question: "58. 당신은 식사예절이 좋습니까?",

    description:"정직하게 답변",

    question: "음식을 먹을 때 절대 쩝쩝거리지 않는다",
    question: "면치기를 하지 않는다",
    question: "젓가락질을 올바르게 한다",
    question: "내 음식이 먼저 나왔어도 상대 음식이 나오기 전까지 먹지 않고 기다린다",
    question: "식탐을 부리지 않고 상대방과 속도를 맞춰 먹는다",
    question: "편식을 하지 않고 골고루 먹는다",
    question: "식사 자리에서 핸드폰을 보지 않는다",
    question: "입을 닦은 냅킨은 상대방에게 보이지 않게 잘 접어 치워두거나 무릎에 둔다",
    question: "식사에 사용되는 식기의 위치를 정확하게 알고 있다",
    question: "식사를 할 때 식기가 긁히거나 부딪히는 소리를 내지 않는다",

    image: "",

    answers: [
        { text: "0~3개 해당", score: 0 },
        { text: "4~5개 해당", score: 25 },
        { text: "6~7개 해당", score: 50 },
        { text: "8~9개 해당", score: 75 },
        { text: "전부 다 해당", score: 100 }
    ]
},

{
    category: "진짜 중요한 문제",

    question: "59. 당신은 보기 중 몇 곳을 가봤습니까?",

    description: "보기 : 게스트하우스, 클럽, 헌팅포차, 양양서핑, 가평빠지, 유흥업소",

    image: "",

    answers: [
        { text: "0개", score: 100 },
        { text: "1~2개", score: 67 },
        { text: "3~4개", score: 33 },
        { text: "5~6개", score: 0 }
    ]
},

{
    category: "진짜 중요한 문제",

    question: "60. 당신은 맞춤법을 잘 지킵니까?",

    image: "",

    answers: [
        { text: "맞춤법 검사기를 돌리고 보낼 정도로 잘 지킨다", score: 100 },
        { text: "기본 상식으로 쓰는데 거의 다 맞다", score: 80 },
        { text: "안 틀리려고 노력한다", score: 60 },
        { text: "가끔 몇 개씩 틀리는 것 같다", score: 40 },
        { text: "자주 헷갈리고 틀린다", score: 20 },
        { text: "귀찮아서 잘 안 지킨다", score: 0 }
    ]
},


];