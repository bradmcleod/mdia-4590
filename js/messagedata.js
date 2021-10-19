// resort list data
var randUserSet = [
    {user: 'user01', first: 'Barry', last: 'Smith1', iconImage:'icon-01.png', profileImage:'profile-01.png', added: '2020-01-01'},
    {user: 'user02', first: 'Larry', last: 'Smith2', iconImage:'icon-02.png', profileImage:'profile-02.png', added: '2020-01-13'},
    {user: 'user03', first: 'Mary', last: 'Smith3', iconImage:'icon-03.png', profileImage:'profile-03.png', added: '2019-11-15'},
    {user: 'user04', first: 'Jerry', last: 'Smith4', iconImage:'icon-04.png', profileImage:'profile-04.png', added: '2020-02-12'},
    {user: 'user05', first: 'Harry', last: 'Smith5', iconImage:'icon-05.png', profileImage:'profile-05.png', added: '2019-10-04'},
    {user: 'user06', first: 'Carrie', last: 'Smith6', iconImage:'icon-06.png', profileImage:'profile-06.png', added: '2020-03-15'},
    {user: 'user07', first: 'Dairy', last: 'Smith7', iconImage:'icon-07.png', profileImage:'profile-07.png', added: '2020-03-06'},
    {user: 'user08', first: 'Fairy', last: 'Smith8', iconImage:'icon-08.png', profileImage:'profile-08.png', added: '2020-04-07'},
    {user: 'user09', first: 'Gary', last: 'Smith9', iconImage:'icon-09.png', profileImage:'profile-09.png', added: '2019-12-11'},
    {user: 'user10', first: 'Kerry', last: 'Smith10', iconImage:'icon-10.png', profileImage:'profile-10.png', added: '2019-12-22'},
    {user: 'user11', first: 'Larry', last: 'Smith11', iconImage:'icon-11.png', profileImage:'profile-11.png', added: '2020-04-23'},
    {user: 'user12', first: 'Perry', last: 'Smith12', iconImage:'icon-12.png', profileImage:'profile-12.png', added: '2020-02-18'},
    {user: 'user13', first: 'Terry', last: 'Smith13', iconImage:'icon-13.png', profileImage:'profile-13.png', added: '2020-01-17'},
    {user: 'user14', first: 'Moe', last: 'Smith14', iconImage:'icon-14.png', profileImage:'profile-14.png', added: '2020-04-10'},    
];

var randMessageSet = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed bibendum nulla eu neque tempor auctor.',
    'Phasellus interdum nibh sodales, mollis urna ut, facilisis odio.',
    'Duis id dolor commodo, placerat metus nec, feugiat diam.',
    'Aliquam tincidunt lacus at libero fringilla ultrices.',
    'Cras vehicula ante id suscipit aliquam.',
    'Praesent porta sem at maximus maximus.',
    'Nulla egestas nisi maximus commodo viverra.',
    'Mauris dictum lectus vitae nibh iaculis suscipit non quis nisi.',
    'Nam sit amet massa porttitor enim pulvinar tempor.',
    'Etiam finibus est interdum nibh luctus viverra.',
    'Sed maximus felis quis nunc finibus congue.',
    'Donec auctor ex ut fringilla fermentum.',
    'Nulla placerat turpis quis velit interdum, ac accumsan est finibus.',
    'Curabitur mollis orci sed urna varius varius.',
    'Fusce blandit nulla et risus imperdiet, ut auctor leo tempus.',
    'Nullam quis lorem dictum, porta tortor sed, pretium libero.',
    'Nam et magna vitae leo rhoncus scelerisque.',
    'Ut placerat orci vel mauris sodales fringilla.',
    'Nulla varius nisi a rhoncus sodales.',
    'Sed ac ipsum vitae mauris vulputate hendrerit et nec turpis.',
    'Maecenas sed quam ultricies sem aliquam ullamcorper sit amet vitae elit.',
    'Nullam ac nulla sit amet quam sagittis egestas ut sit amet risus.',
    'Etiam fermentum mauris vitae ex pulvinar, eu maximus urna fermentum.',
    'Donec eget augue a magna tempor pretium.',
    'Pellentesque in mauris eget mauris consequat volutpat eu vitae est.',
    'Aenean aliquet est quis diam facilisis pretium.',
    'In id velit ac magna auctor faucibus sed at augue.',
    'Donec vitae neque nec libero sodales dapibus.'
]

function genStartSet(){

    // generate2-10 messages
    var startCount = Math.floor(Math.random()*8 + 2);
    var returnSet = [];    

    for(let i = 0; i <= startCount; i++){
        // random past date
        let pastDate = new Date();
        //pastDate.setDate(pastDate.getDate() - Math.random() * 10);
        pastDate.setTime(pastDate.getTime() - Math.random() * 1000 * 60 * 60 * 24 * 20);
        returnSet.push(genNewMsg(pastDate, true));
    }

    // sort newest to to oldest
    returnSet.sort(function(a,b){
        if(a.msgDate > b.msgDate)
            return -1;
        else if(a.msgDate < b.msgDate)
            return 1;
        else
            return 0;
    });

    return returnSet;
}

function genNewMsg(dateStamp, isRead){

    return {
        msgFrom: randUserSet[Math.floor(Math.random() * randUserSet.length)],
        msgDate: (dateStamp == null) ? new Date() : dateStamp,        
        msgContent: randMessageSet[Math.floor(Math.random() * randMessageSet.length)],
        read: (isRead == null) ? false : isRead
    }    
}

