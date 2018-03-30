/**
 * Created by dkvelusa on 2/11/2018.
 */
var controllers = angular.module('controllers', []);

controllers.controller('LandingController',
    function LandingControllerFnc($scope){
    $scope.addClassHeader = function (e) {
        if(e.type === "mouseover"){
            $('.landingHeader').addClass('landingMouseOver');
        } else if(e.type === "mouseleave"){
            $('.landingHeader').removeClass('landingMouseOver');
        }
    };
    $scope.animateSkill = function (){
        $('.technicalSkillsSection div').animate({left:"25px"});
    };
    $scope.details={
        'welcomeText' : 'Welcome, Hope you are doing Great!',
        'shortDescription' : 'I\'m a Software Developer with two years of experience, specialising in Front-end Technologies and with a keen interest towards Programming.',
        'skillSets':{
            'technicalSkills' : ['Javascript','JQuery', 'AngularJs', 'JSON', 'AJAX', 'BackboneJs', 'HTML', 'Css', 'Java', 'SQL', 'DataStructures & Algorithms', 'ProblemSolving'],
            'softSkills' : ['Dedicated', 'HardWorker']
        },
        'tools' : {
            'IDE' : ['Eclipse', 'WebStorm', 'SublimeText', 'SQL Developer', 'Net Beans'],
            'Build': ['Ant'],
            'Source Control' : ['Git']
        },
        'achievements' : ["Promoted to IC level 2 in a year", "Recognized by Peers and manager as the Performer of the Year", "Fastest to close 100 Bugs"],
        'contact':{
            'phone' : ['+91-8884097896', '+91-9750568258'],
            'email' : 'dhilip1211@gmail.com',
            'location' : 'Bengaluru - 560103',
            'linkedIn' : 'www.linkedin.com/in/dhilipkmr'
        },
        'education': {
            'Schooling': {
                'School': 'K.G. Matric. Hr. Sec. School',
                'Branch': 'Computer Science',
                'Period': '2006-12',
                'Percentage': "97%",
                'Project': 'Library Management System'
            },
            'Under Graduate': {
                'College': 'PSG College Of Technology',
                'Branch': 'B.E. Computer Science & Engineering',
                'Period': '20012-16',
                'Percentage': "8.08",
                'Project': 'Moving Object Detection and Alarming System based on Image Processing Technique'
            },
        },
        'workExperience' : [
                {
                    'name': "Oracle India Pvt Ltd",
                    'role': 'Applications Developer IC 0 (Intern)',
                    'period': '2016 Jan - Jun',
                    'achievements': []
                },{
                    'name' : "Oracle India Pvt Ltd",
                    'role' : 'Applications Developer IC 1',
                    'period' : '2016 Jun - 2017 Dec',
                    'achievements' : ["Implemented UI in our Application to allow it to Integrate itself with other Applications for data transfer which played a Key Role in helping customers migrate from a different product to our own",
                    "Created a Summary Dashboard on Data Transfers status that provided details on Job Status which made it easier for the customers to identify and rectify errors easily",
                    "Implemented Copy/Duplication feature for all wizards in the application which resulted in faster creation of flows, connections and mappings.",
                    "Consumed REST Apis from Server side and built Interactive UI"]
                },{
                    'name' : "Oracle India Pvt Ltd",
                    'role' : 'Applications Developer IC 2',
                    'period' : '2017 Dec - Present',
                    'achievements' : ["Implemented changes in UI which helped users to Schedule a Job based on their choice"]
                }],
        skills: {
            'Javascript' : '85',
            'JQuery' : '90',
            'AngularJs' : '70',
            'BackboneJs' : '80',
            'HTML' : '90',
            'Css' : '80',
            'Java' : '70',
            'SQL' : '70'
        }
    };
});


resume.
  component('skill1', {
    template:
        '<div ng-repeat="(prop, key) in $ctrl.technicalSkills1">' +
            '<div class="row-12 skillRow">' +
                '<div><span class="text-left skillName"> {{key[0]}}</span>' + '<span class="text-right percent">{{key[1]}}</span>' +
                    '<div class="progress">' +
                        '<div class="progress-bar skillLevel" ng-style = "{width : key[1]}"></div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>',
    controller: function PhoneListController() {
        this.technicalSkills1 = [
            ['Javascript', '85%'],
            ['JQuery', '90%'],
            ['AngularJs', '60%'],
            ['Bootstrap', '70%'],
            ['React', '50%']
            ];
    }
  });

  resume.
  component('skill2', {
    template:
        '<div ng-repeat="(prop, key) in $ctrl.technicalSkills2">' +
            '<div class="row-12 skillRow">' +
                '<div><span class="text-left skillName"> {{key[0]}}</span>' + '<span class="text-right percent">{{key[1]}}</span>' +
                    '<div class="progress">' +
                        '<div class="progress-bar skillLevel" ng-style="{width : key[1]}"> </div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>',
    controller: function PhoneListController() {
        this.technicalSkills2 = [
            ['Backbone', '80%'],
            ['HTML', '85%'],
            ['Css', '75%'],
            ['Java', '65%'],
            ['SQL', '80%']
            ];
    }
  });


                
                