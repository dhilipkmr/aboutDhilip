/**
 * Created by dkvelusa on 2/11/2018.
 */
 var controllers = angular.module('controllers', []);
 var templ;

 controllers.controller('LandingController',
    function LandingControllerFnc($scope){

        //Declarations

        $scope.name             = 'DHILIP KUMAR';
        $scope.role             = 'UI/UX DESIGNER & FRONTEND DEVELOPER';

        //About Me
        $scope.title1           = 'ABOUT ME';
        $scope.shortDescription = 'A Software Developer with two Years of Experience, Specialising in Front-end Technologies with a keen Interest towards Programming';
        $scope.contactDetails   = [
        ['Age',                 '23'],
        ['Address',             'B 103, Isha Casablanca'],
        ['Email',               'dhilip1211@gmail.com'],
        ['Phone',               '+91-9750568258']
        ];
        $scope.contactLink      = [
            ['', 'https://www.linkedin.com/in/dhilipkmr/'],
            ['fab fa-github', 'https://github.com/dhilipkmr/', ]
        ];

        //Skills
        //Right
        $scope.technicalSkills1 = [
        ['Javascript', '85%'],
        ['JQuery', '90%'],
        ['AngularJs', '60%'],
        ['Bootstrap', '70%'],
        ['React', '50%']
        ];

        //Left
        $scope.technicalSkills2 = [
        ['Backbone', '80%'],
        ['HTML', '85%'],
        ['Css', '75%'],
        ['Java', '65%'],
        ['SQL', '80%']
        ];

        //Portfolio
        //Please add your font icon name in the second index of the array Preferred : Google fonts
        $scope.portfolioDetails =  [
        ['DASHBOARD',           'fa-chart-line',  'A Summary Dashboard on Data Transfers Status for each Jobs to Identify & Rectify Errors'],
        ['JOB SCHEDULE',        'fa-clock',  'Implemented Wizard which allows Users to Schedule a Job based on their Choice'],
        ['QUICK SAVE',          'fa-save',  'Ability to Immediately Save Flows before the Last Screen, helped in faster modification of Flows'],
        ['TREE GRID',           'fa-th',  'Reduced the Page Loading time by implementing Lazy Load functionality as a part of Tree Grid'],
        ['QUICK FILTERS',       'fa-filter',  'Condition based Record Filtering for Grids, based on Job\'s Start/End Time and Status'],
        ['OBJECT MANIPULATION', 'fa-edit',  'Provided the ability to modify the configurations for Out of the Box Flows']
        ];
        
        //Education
        $scope.education        = [
        {
        'name'                   : 'K.G. Matric. Hr. Sec. School',
        'branch'                : 'Computer Science',
        'period'                : '2006-2012',
        'project'               : 'Library Management System'
        },
        {
        'name'                  : 'PSG College Of Technology',
        'branch'                : 'B.E. Computer Science',
        'period'                : '2012-2016',
        'project'               : 'Moving Object Detection and Alarming'
        }];


        //Professional Experiennce
        $scope.experience       = [
        {
        'name'                  : 'Oracle',
        'role'                  : 'Intern',
        'period'                : 'Jan 2016 - Jun'
        },
        {
        'name'                  : 'Oracle',
        'role'                  : 'Associate Applications Developer IC1',
        'period'                : 'Jul 2016 - Dec 2017'
        },
        {
        'name'                  : 'Oracle',
        'role'                  : 'Applications Developer IC2',
        'period'                : 'Dec 2017 - Present',
        }];
    
});