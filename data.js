export var patterns = [
    "Where is BITM College located?",
    "What payment options are available?",
    "How can I make a payment?",
    "Is online payment accepted?",
    "Tell me more about BITM.",
    "When was BITM established and who founded the college?",
    "Tell me about the courses offered in BITM.",
    "What courses are available in BITM?",
    "Can you provide information about the courses offered?",
    "What are the available courses in BITM?",
    "Tell me about the Computer Science and Engineering course.",
    "Can you provide information about the Computer Science course?",
    "Tell me more about Computer Science.",
    "What can you tell me about Computer Science and Engineering?",
    "Tell me about Electrical and Electronics Engineering.",
    "Can you provide information about the Electrical Engineering course?",
    "Tell me more about Electrical and Electronics Engineering.",
    "What can you tell me about Electrical and Electronics Engineering?",
    "Tell me about Electronics and Communication Engineering.",
    "Can you provide information about Electronics and Communication Engineering?",
    "Tell me more about Electronics and Communication Engineering.",
    "Tell me about Mechanical Engineering.",
    "Can you provide information about the Mechanical Engineering course?",
    "Tell me more about Mechanical Engineering.",
    "Tell me about Civil Engineering.",
    "Can you provide information about the Civil Engineering course?",
    "Tell me more about Civil Engineering.",
    "Tell me about Artificial Intelligence and Engineering.",
    "Can you provide information about Artificial Intelligence?",
    "Tell me more about Artificial Intelligence.",
    "What can you tell me about Artificial Intelligence and Engineering?",
    "Tell me about Data Science and Engineering.",
    "Can you provide information about the Data Science and Engineering course?",
    "Tell me more about Data Science.",
    "What can you tell me about Data Science and Engineering?",
    "Who are the Heads of Departments?",
    "Can you provide a list of the Head of Departments?",
    "Who are the faculties in the Computer Science and Engineering department?",
    "Can you list the faculties in the Computer Science and Engineering department?",
    "Tell me about the faculty in the Computer Science and Engineering department.",
    "Who are the staff members in the Computer Science and Engineering department?",
    "Can you provide information about the teachers in the Computer Science and Engineering department?",
    "Who are the faculties in the Artificial Intelligence and Engineering department?",
    "Can you list the faculties in the Artificial Intelligence and Engineering department?",
    "Who are the faculties in the Electrical and Electronics Engineering department?",
    "Can you list the faculties in the Electrical and Electronics Engineering department?",
    "Who are the faculties in the Electronics and Communication Engineering department?",
    "Can you list the faculties in the Electronics and Communication Engineering department?",
    "Who are the faculties in the Civil Engineering department?",
    "Can you list the faculties in the Civil Engineering department?",
    "Who are the faculties in the Data Science and Engineering department?",
    "Can you list the faculties in the Data Science and Engineering department?"
  ];

export var keywords = ['aiml', 'all', 'and', 'artificial', 'auditorium', 'ballari', 'bitm', 'bus', 'campus', 'class', 'classroom', 'college', 'computer', 'cse', 'cv', 'data', 'deputy', 'dhar', 'did', "didn't", 'director', 'do', 'does', "doesn't", "don't", 'eee', 'electrical', 'electronics', 'engineering', 'established', 'every', 'everyone', 'exams', 'existing', 'experience', 'faculties', 'faculty', 'fees', 'functions', 'good', 'had', 'he', 'hello', 'hi', 'highest', 'hod', 'how', 'institute', 'intelligence', 'kcet', 'locality', 'located', 'location', 'mahika', 'management', 'me', 'mechanical', 'minchu', 'much', 'name', 'naveed', 'new', 'of', 'old', 'package', 'payment', 'place', 'principal', 'programs', 'science', 'she', 'someone', 'somewhere', 'staff', 'student', 'students', 'teachers', 'technology', 'text', 'the', 'them', 'they', 'timings', 'what', 'what', 'when', 'where', 'which', 'who']
  
export var data = {
    "intents": [
      {
        "patterns": ["bitm college located","Location of BITM College"],
        "responses": ["Jnana Gangotri Campus, Hospet Rd, near Allipura, Ballari, 583104",]
      },
      {
        "tag": "greeting",
        "patterns": [
          "hii", "hiii", "hiiii", "Hi", "Hey", "How are you", "Is anyone there?", "Hello", "Good day"
        ],
        "responses": [  
          "Hey", "Hello, thanks for visiting BITM Protrol", "Hi there, what can I do for you?", "Hi there, how can I help?"
        ]
      },
      {
        "tag": "goodbye",
        "patterns": ["Bye", "See you later", "Goodbye"],
        "responses": [
          "See you later, thanks for visiting 🤗",
          "Have a nice day 🤗",
          "Bye! Come back again soon. 🤗"
        ]
      },
      {
        "tag": "thanks",
        "patterns": ["Thanks", "Thank you", "That's helpful", "Thank's a lot!"],
        "responses": ["Happy to help!", "Any time!", "My pleasure"]
      },
      {
        "tag": "payments",
        "patterns": [
          "payment option",
          "how can i pay",
          "online payment is accepted ?",
          "Is Cash Accepted"
        ],
        "responses": [
          "We accept VISA, Mastercard , UPI transaction too and Even we have any option for Payment Through Bank Beside our College"
        ]
      },
      {
        "tag": "funny",
        "patterns": [
          "Tell me a joke!",
          "Tell me something funny!",
          "Do you know a joke?"
        ],
        "responses": [
          "Why did the hipster burn his mouth? He drank the coffee before it was cool.",
          "What did the buffalo say when his son left for college? Bison."
        ]
      },
      {
        "tag": "BITM",
        "patterns": [
          "BITM",
          "Tell me about BITM"
        ],
        "responses": [
          "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdDTIxXfQyX_wVsUZCB-Ck4pnSnHJ9oOsk3XcbztKlhYcANIbjkmogyMphWrGEfR5zFU&usqp=CAU' width='180' height='120'>Ballari Institute of Technology and Management , an Autonomous college established in 1997 BITM is Currently an Autonomous Institute providing Education for Various Technological and Management Courses"
        ]
      },
      {
        "patterns": ["Established BITM started college founded"],
        "responses": [
          "In 1997, by Smt. Basavarajeswari, after serving the nation for almost four decades she had a vision to give quality education to students of Bellary. "
        ]
      },
      {
        "tag": "Course",
        "patterns": [
          "Course",
          "Courses offered in BITM",
          "Courses offered",
          "Courses in BITM"
        ],
        "responses": [
          " There are Many Cousrse Offered in BITM like CSE,EEE,ECE,ME,AIML,AI,DS(Data Science) and MBA Course too Type any of the Course name to get Detailed Information"
        ]
      },
      {
        "tag": "CSE",
        "patterns": [
          "CSE",
          "Computer",
          "Computer SCience",
          "Computer SCience and Engineering"
        ],
        "responses": [
          " <img src='https://png.pngtree.com/png-clipart/20220824/original/pngtree-word-cloud-computer-science-png-image_8489345.png' width='90' height='100'>Computer Science and Engineering is 4 years Course , there is Huge Demand for CSE in BITM , Providing Huge Placement Offers Computer science focuses on the development and testing of software and software systems. It involves working with mathematical models, data analysis and security, algorithms, and computational theory. Computer scientists define the computational principles that are the basis of all software <br> <br> <a href= 'https://bitm.edu.in/computer-science/'>Click Here</a>  for More Details <br> <br> Type <u> 'Faculty of CSE' </u> to get names of all CSE Faculties"
        ]
      },
      {
        "tag": "EEE",
        "patterns": [
          "EEE",
          "Electrical",
          "Electrical and Electronics",
          "Electrical and Electronics Engineering"
        ],
        "responses": [
          "<img src='https://w7.pngwing.com/pngs/385/71/png-transparent-electricity-electrical-engineering-symbol-electrician-electrical-s-trademark-logo-electrical-wiring.png' width='120' height='100'>Electronics engineers analyze the requirements and costs of electrical systems. Electrical engineers design, develop, test, and supervise the manufacture of electrical equipment, such as electric motors, radar and navigation systems, communications systems, or power generation equipment <br> <br> <a href= 'https://bitm.edu.in/electrical-electronics/'>Click Here</a> For More Details <br> <br> Type <u> 'Faculty of EEE' </u> to get names of all EEE Faculties"
        ]
      },
      {
        "tag": "ECE",
        "patterns": [
          "ECE",
          "Electronics and Communication",
          "Electronics and Communication Engineering"
        ],
        "responses": [
          "<img src='https://image.pngaaa.com/799/2861799-middle.png' width='110' height='100'>Electronics and Communication is 4 Years and 8 Semester Course The Department of Electronics & Communication Engineering shall strive to create engineering technocrats for addressing the global challenges in relevant areas to cater the ever-changing needs of society at National and International levels. <br> <br> <a href= 'https://bitm.edu.in/electronics-communication/'> Click Here </a> For More Details <br> <br> Type <u> 'Faculty of ECE' </u> to get names of all ECE Faculties"
        ]
      },
      {
        "tag": "ME",
        "patterns": [
          "ME",
          "Mechanical",
          "Mechanical Engineering"
        ],
        "responses": [
          " <img src='https://e7.pngegg.com/pngimages/411/183/png-clipart-mechanical-engineering-logo-mechanical-engineering-logo-thermal-engineering-mechanics-industrail-workers-and-engineers-miscellaneous-text.png' width='90' height='100'>This Course provides an ability to identify, formulate, and solve complex engineering problems by applying principles of engineering, science, and mathematics , an ability to apply engineering design to produce solutions that meet specified needs with consideration of public health, safety, and welfare, as well as global, cultural, social, environmental, and economic factorsVisit <br> <br> <a href= 'https://bitm.edu.in/mechanical-engineering/'> Click Here </a> For More Details <br> <br> Type <u> 'Faculty of ME' </u> to get names of all ME Faculties"
        ]
      },
      {
        "tag": "civil",
        "patterns": [
          "CV",
          "CVE",
          "Civil Engineering"
        ],
        "responses": [
          "<img src='https://png.pngtree.com/element_our/20190601/ourmid/pngtree-cartoon-worker-looking-at-engineering-drawing-png-material-at-construction-site-image_1340594.jpg' width='80' height='100'>Civil Engineering is 4 Years and 8 sem Course <br> Educate new generations of civil engineers to meet the challenges, demands, and expectations of our global society, Cultivate, enrich and promote scholarship, responsibility and service among our graduates <br> <br>  <a href= 'https://bitm.edu.in/civil-engineering/'> Click Here </a> For More Details <br> <br> Type <u> 'Faculty of CVE' </u> to get names of all CVE Faculties"
        ]
      },
      {
        "tag": "AIML",
        "patterns": [
          "AIML",
          "Artificial Engineering",
          "Artificial Intelligence",
          "Artificial Intelligence and Engineering"
        ],
        "responses": [
          "<img src='https://www.smec.ac.in/assets/images/aiml/aiml.png' width='120' height='70'>The objective of general AI is to design a system capable of thinking for itself just like humans do. <br> Currently, general AI is still under research, and efforts are being made to develop machines that have enhanced cognitive capabilities. <br> AIML has Huge Demand all over World Providing big pool of Oppurtunities for all the Students AIML is 4 years and 8 Sem Duration Course offering Knowledge of Aritificial Intelligence and Mechine Learning"
        ]
      },
      {
        "tag": "DataScience",
        "patterns": [
          "DS",
          "DSE",
          "Data Science",
          "Data SCience and Engineering"
        ],
        "responses": [
          "<img src='https://piriyakumar.co.in/wp-content/uploads/2018/02/datascience.png' width='120' height='100'>Data Science is New Brance Offered by our College which is 4 years and 8 sem Duration Course which provides all the Knowledge of Data Scientist to process the Data and provide the Specified Results. <br> Data scientist is to explore, sort and analyze megadata from various sources in order to take advantage of them and reach conclusions to optimize business processes or for decision support."
        ]
      },
      {
        "tag": "HODs",
        "patterns": [
          "HODs",
          "Head of Departments"
        ],
        "responses": [
          " Dr. R N Kulkarni - HOD of CSE Dept. <br> Dr. K M Sadyojatha - HOD of ECE Dept. <br> Dr. Vidyavati - HOD of AIML "
        ]
      },
      {
        "tag": "Naveed",
        "patterns": [
          "Shaik Mohammed Naveed",
          "Mohammed Naveed",
          "Naveed"
        ],
        "responses": [
          "He Was 2024 Passed Out Batch Student"
        ]
      },
      {
        "tag": "Mahika",
        "patterns": [
          "Mahika",
          "Mahika Dhar",
          "Minchu"
        ],
        "responses": [
          "She Was 2024 Passed Out Batch Student."
        ]
      },
      {
        "tag": "Principal",
        "patterns": [
          "Principal",
          "Principal of BITM"
        ],
        "responses": [
          "Dr. Yadavalli Basavaraj  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ6WOApRm3bFZ5FfX7-pv3-TrZHdO4hnH6cf5U_87l0oEDl1yDwIP59NCgTxglVb-d_KY&usqp=CAU' width='70' height='80'>"
        ]
      },
      {
        "tag": "Director",
        "patterns": [
          "Director",
          "Director of BITM"
        ],
        "responses": [
          "Dr. Yashvanth Bhupal , MS,Ph. D,MIE,MISTE  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTKYujpw4jPqgEAZh17SRCbXsZJ_G3Z2zpmuGzn2LnjutTslTGjqSvsxYfQc40d_pl1pg&usqp=CAU  ' width='70' height='80'>"
        ]
      },
      {
        "tag": "DD",
        "patterns": [
          "DD bitm",
          "Deputy Director",
          "Deputy Director of BITM"
        ],
        "responses": [
          "PROF. PRITHVIRAJ. Y.J, Trustee, Dy. Director, BITM, Bellary  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYaPAFEpqS59XJGM0Xje-RleHECsnZn-B7TT9rOtzzf24NM7Hn004aFbsCO-hyAtRo1s&usqp=CAU' width='70' height='80'> "
        ]
      },
      {
        "tag": "Faculites",
        "patterns": [
          "Faculites",
          "Faculite",
          "Faculites of BITM", "staff bitm","teachers bitm"
        ],
        "responses": [
          "Which Dept. Faculties do you need? <br> Try Typing <br> Faculty of CSE <br> EEE Faculty <br> ECE Faculty <br> ME Faculty <br> AIML Faculty."
        ]
      },
      {
        "tag": "Faculty of CSE",
        "patterns": [
          "CSE Faculties",
          "Faculties of CSE",
          "Faculty of CSE",
          "staff of CSE",
          "Teacher of CSE"
        ],
        "responses": [
          "Dr. Rajkumar Nagnathrao Kulkarni (HOD) <br> Dr. Aradhana D (Ph. D) <br> Dr. RajaShree V Biradar (Ph. D) <br> Dr. Suresh Yeresime (Ph. D) <br> Dr. Anita S Patil <br> Muhibur Rahman T R <br> Venkateshwar Amingad <br> Phani Rama Prasad <br> Sreenivas Chinta Kalayalu <br> Swethashree A <br> Sheetal Janthakal <br> Sqathi D V <br> Prathiba Mishra <br> Lakshmi Sharma K M <br> Madhuri A <br> Kiran A MudaRaddi <br> Usman K <br> Sudhakar Avareddy <br> Shafiulla Mohammed <br> Dadapeer <br> Hayath T M <br> SriSaiLanath <br> Hari Krishana H <br> Virupaksha Gouda R <br> Sreenivas M <br> Vedavyas J <br> Chandrashekhar v <br> Narasimharaju Paka <br>"
        ]
      },
      {
          "patterns":["aiml faculties","aiml faculty","aiml teachers","aiml staff"],
          "responses":["Dr Vidyavathi B M <br> Dr Noorulla Shariff<br> Dr Girish Kumar D <br> Dr Shridhar Srinivas Kalgudi <br> Chandini M S <br> Steffi Nivedita S <br> Thejaswini H <br> Vijayalaxmi B M<br Syeda Badrunissa Begum<br Kavyashree K <br> Rachel Evangeline Christian <br> Praveena Kumar CTM <br> Prema KV"]
        },
        {
          "patterns":["EEE faculties","EEE faculty","EEE teachers","EEE staff"],
          "responses":["Dr Basavaraj Sugappa Khened <br> Dr Sharana Reddy <br> Dr Raghavendra P <br> Abdul Khadar Asundi <br> Priyanka H T <br> Pushpalatha Kumari M <br> Parvathi <br> Sujatha Halali <br> Farzana Begum Kalbubrgi Shaik <br> Arathi P B <br> Rajyalakshmi <br> Naga Prathyusha <br> Nandini S Patil <br> Soujanya B N <br> Zoya Parveez S <br> Kurshiya S Biradar <br> Vijaya Krishna Mallula <br> Vijay Kumar M K <br>Narasimhulu Kasa <br> Shridhar Mushigeri <br> Kamal Kishore Yaranagula <br> Harish Kumar G <br> Mahammad Anwar <br> Sashidhara B <br> Raghavendra R M <br> Shanthala H <br> Pooja G Solanki <br> Asma Kawser S <br> Gangadhar M <br>"]
        },
        {
          "patterns":["ECE faculties","ECE faculty","ECE teachers","ECE staff"],
          "responses":["Dr Eranna Uppar <br> Dr Venkana Gouda Channa Basavana Gouda Patil <br> Dr Sadyojatha Kalapur Math <br> Dr Mallikarjuna A <br> Dr Kodavayur Sankar Shiva Kumar <br> Dr Renuka Sagar <br> Dr Fareduddin Ahme J S <br> Dr Naseeruddin <br> Dr Abdul Lateef Haroon P S <br> Dr William Thomas <br> Premchand D R <br> Nayana M <br> Nilam Chheda <br> Prathiba Shanbog P S <br> Shilpa K R <br> Geetha H Y <br> Simantini Roy Chowdhury <br> Sowbhagya B <br> Sumalatha Venkob Rao <br> Priyanthica Paul <br> VijayaRANI t <br> Ghousia Sanober Sabreen <br> Chandrakala B A <br> Harshitha K R <br> Manjunath Ganjipete <br> Ambrayya<br> Vishnukanth Karwa <br> Aswathanarayana <br> Vinaykumar Javalkar <br> Ranjit Pyati <br> Hemantha Kumar R Kappali <br> Srikantha K M <br> Prabhakar Kambar <br> Ulganathan J <br> Sagar T V <br> Venkatayya G <br> Maski Shravan Kumar M <br> Udayraj Kumar M <br> Koushalya S <br> Srisha Nandavaram <br> Bharani Rao P <br> Raymond Irudayaraj I <br> Pramod Mutalik <br>"]
        },
        {
          "patterns":["Civil faculties","civil faculty","civil teachers","civil staff"],
          "responses":["Dr T H Patel <br> Dr Mahabaleswara <br> Dr Manikanta D <br> Nirmala MV <br> Brunda A <br> Shiva Kumar K <br> Khalid Mohemmed <br> Ravi Teja U <br> Basavaraj B <br> Vinay Kumar Hunugund <br> Anil Kumar H M <br> Ravichandra Honnalli <br> Kishore Kumar Reddy S <br> MD Abdul Manan Rabbani <br> Syed Sadath Ali <br> Mohammed Haseebulla M <br> Sharanabasava Patil <br> Ambareesh V <br> Tanu H M <br> Srinivas Pujari <br> Praveen Ashok M <br> Chaitra H <br> Preeti Jambagi <br> Sagra N S <br> Jayarama Shetty K <br>"]
        },
        {
          "patterns":["data science faculties","data science faculty","data science teachers","data science staff"],
          "responses":["data will be updated soon!"]
        },
        {
          "patterns":["ME faculties","ME faculty","ME teachers","ME staff"],
          "responses":["Dr Yadavalli Basavaraj <br> Dr Raghavendra Joshi <br> Dr Venkata Ramana <br> Dr Ganesh Barikara <br> Dr Raju Jadar <br> Dr H M Anil Kumar <br> Dr Sabtosh V Janamatti <br> Dr T Lakshmu Kumari <br> Dr Banakar Nagaraj <br> Dr Manjunatha TH <br> Vishnu Prasad Bommanahal <br> Shivarama Krishna <br> Shrinivasulu Vadde <br> Jayaprakash Bantanahal Gavisiddesha Pattanashetty <br> Raghavendra Karnool <br> Venkatesh KC <br> Sabtosha B M <br> Vijaya Kumar BP <br> Rajashekhara K <br> Raghavendra Setty Gangavathi <br> Shiva Kumar S Y <br> MD Fayaz K <br> Manjunatha E <br> Pavan B S <br> K Raghavendra <br> Maharaja Gowda B <br> Kalyan Babu S T <br> Akkasali Taranath <br> Pavan Kumar BK <br> Mayur D Pawar <br> Shekar K <br> Irayya D Shikkerimath <br>"]
        },
    ]
  };
