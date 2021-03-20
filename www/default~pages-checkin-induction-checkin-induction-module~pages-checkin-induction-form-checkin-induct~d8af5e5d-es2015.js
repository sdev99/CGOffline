(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-checkin-induction-checkin-induction-module~pages-checkin-induction-form-checkin-induct~d8af5e5d"],{

/***/ "vH+u":
/*!***********************************************!*\
  !*** ./src/app/services/demo-data.service.ts ***!
  \***********************************************/
/*! exports provided: DemoDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoDataService", function() { return DemoDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let DemoDataService = class DemoDataService {
    constructor() {
    }
};
DemoDataService.myProfileDocuments = [
    { title: 'Risk Assessment Example', exipreTime: '2020-10-31 12:00:00' },
    { title: 'Site Audit', exipreTime: '2020-10-31 12:00:00' },
    { title: 'Site Audit', exipreTime: '2020-10-12 12:00:00' },
    { title: 'Site Audit', exipreTime: '2020-10-11 15:00:00' },
    { title: 'Site Audit', exipreTime: '2020-10-05 18:00:00' },
    { title: 'Site Audit', exipreTime: '2020-10-18 12:00:00' },
    { title: 'Site Audit', exipreTime: '2020-10-25 21:00:00' },
    { title: 'Site Audit', exipreTime: '2020-10-22 12:00:00' },
    { title: 'Site Audit', exipreTime: '2020-10-04 01:00:00' },
    { title: 'Site Audit', exipreTime: '2020-09-30 04:00:00' },
];
DemoDataService.currentCheckinWorkPermits = [
    { title: 'Work Permit for this particular place goes here...' },
    { title: 'Work Permit for this particular place goes here...' },
    { title: 'Work Permit for this particular place goes here...' },
    { title: 'Work Permit for this particular place goes here...' },
    { title: 'Work Permit for this particular place goes here...' },
    { title: 'Work Permit for this particular place goes here...' },
    { title: 'Work Permit for this particular place goes here...' },
    { title: 'Work Permit for this particular place goes here...' },
    { title: 'Work Permit for this particular place goes here...' },
];
DemoDataService.currentCheckinFiles = [
    {
        type: 'folder',
        title: 'Work Permit Forms',
        navigation_type: 'work-permit'
    },
    {
        type: 'pdf',
        title: 'Longer document title can go here ... '
    },
    {
        type: 'image',
        title: 'Document title goes here'
    },
    {
        type: 'form',
        title: 'Form title goes here'
    },
    {
        type: 'document',
        title: 'Document title goes here'
    },
    {
        type: 'video',
        title: 'Document title goes here'
    },
    {
        type: 'video',
        title: 'Document title goes here'
    }
];
DemoDataService.activityList = [
    {
        status: 'overdue',
        highprority: false,
        time: 'Last week',
        name: 'Audit Demo Location 1',
        formType: {
            title: 'Hand-Arm Vibration Exposure Calculator',
            id: 'hav'
        }
    },
    {
        status: 'overdue',
        highprority: false,
        time: 'Last week',
        name: 'Audit Demo Location 1',
        formType: {
            title: 'Form RiskAssessment',
            id: 'risk_assesstment'
        }
    },
    {
        status: 'overdue',
        highprority: false,
        time: 'Last week',
        name: 'Audit Demo Location 3',
        formType: {
            title: 'Custom Form',
            id: 'custom'
        }
    },
    {
        status: 'rejected',
        rejectReason: 'Please send another photo, this one doesn\'t cover your entire face. The photo must be in line with our internal regulations. Thank you',
        rejectedBy: 'Markus Letterman',
        rejectedDate: '24Mar 2019 16:30',
        highprority: false,
        time: 'Yesterday',
        name: 'Audit Demo Location 5',
        formType: {
            title: 'Accident Report',
            id: 'accident_report'
        }
    },
    {
        status: 'active',
        highprority: false,
        time: 'Today',
        name: 'Regular activity title goes here on a single line of...',
        formType: {
            title: 'Custom Form',
            id: 'custom'
        },
        attachments: [{ title: 'Related attachment for this particular activity' }, { title: 'Site Audit Form' }, { title: 'Another attachment for this activity' }, { title: 'One more attachment right here' }]
    },
    {
        status: 'active',
        highprority: false,
        time: 'Today',
        name: 'Simple Activity',
        formType: {
            title: 'Custom Form',
            id: 'custom'
        }
    }
];
DemoDataService.activityCustomForm = [
    {
        question_type: 'options',
        question: 'Please rate site cabin cleanliness from (1-5)',
        note: 'is a text for the above question',
        required: true,
        document: {
            title: 'Example of clean site cabin',
        },
        options: [
            { title: '1 poor', value: 1, color: '#E74731' },
            { title: '2 Below Average', value: 2, color: '#FF8049' },
            { title: '3 Average', value: 3, color: '#FFBA00' },
            { title: '4 Above Average', value: 4, color: '#1CF583' },
            { title: '5 Excellent', value: 5, color: '#14B05E' },
        ],
        canMultipleAsnwer: false
    },
    {
        question_type: 'image_annotation',
        question: 'Please take picture of Site cabin',
        required: true,
    },
    {
        question_type: 'options',
        question: 'Are all Safety signs in place?',
        required: true,
        note: 'is a text for the above question',
        options: [
            { title: 'Yes', value: 1 },
            { title: 'No', value: 0 },
            { title: 'N/A', value: -1 },
        ],
        isAdditionalComment: true,
        canMultipleAsnwer: true
    },
    {
        question_type: 'date',
        question: 'Date on scarffold tag',
        notesWithPhoto: true
    },
    {
        question_type: 'time',
        question: 'Why is Lorem Ipsum Dolor used?',
    },
    {
        question_type: 'photo',
        question: 'What is the meaning of Lorem ipsum?',
    },
];
DemoDataService.inductionFiles = [
    {
        type: 'video',
        content: ['https://www.youtube.com/embed/tgbNymZ7vqY', 'https://www.youtube.com/embed/tgbNymZ7vqY'],
    },
    {
        type: 'image',
        content: ['https://www.fujifilm.in/globalassets/digital_cameras/x/fujifilm_x_t3/sample_images/img/index/ff_x_t3_002.jpg', 'https://fujifilm-x.com/wp-content/uploads/2019/08/x-t30_sample-images02.jpg']
    },
    {
        type: 'richtext',
        content: ['Trix\n' +
                'Trix is an open-source project from Basecamp, the creators of Ruby on Rails. Millions of people trust their text to Basecamp, and we built Trix to give them the best possible editing experience.\n' +
                '﻿\n' +
                '﻿\n' +
                '﻿\n' +
                '﻿\n' +
                '\n' +
                'Different By Design\n' +
                'Most WYSIWYG editors are wrappers around HTML’s contenteditable and execCommand APIs, designed by Microsoft to support live editing of web pages in Internet Explorer 5.5, and eventually reverse-engineered and copied by other browsers.\n' +
                '\n' +
                'Because these APIs were never fully specified or documented, and because WYSIWYG HTML editors are enormous in scope, each browser’s implementation has its own set of bugs and quirks, and JavaScript developers are left to resolve the inconsistencies.\n' +
                '﻿\n' +
                '﻿\n' +
                'Trix sidesteps these inconsistencies by treating contenteditable as an I/O device: when input makes its way to the editor, Trix converts that input into an editing operation on its internal document model, then re-renders that document back into the editor. This gives Trix complete control over what happens after every keystroke, and avoids the need to use execCommand at all.\n' +
                '\n' +
                'Trix was created by\n' +
                'Sam Stephenson (@sstephenson)\n' +
                'Javan Makhmali (@javan)\n' +
                '\n' +
                'Thanks for checking it out!']
    },
    {
        type: 'form',
        content: [''],
    },
    {
        type: 'va',
        content: ['Whereas, Visitor desires to visit Bluestar Silicones USA Corp.’s (“Bluestar”) facility for legitimate business purposes directly and only related to Visitor’s business and/or proposed business with Bluestar;\n' +
                'Whereas, Visitor recognizes, agrees, and understands that Bluestar would not provide Visitor with any access in or to its facility unless Visitor first agreed to be bound by, and to fully comply with, the terms and provisions of this Agreement;\n' +
                'Whereas, the Bluestar premises are not open to the public, and the equipment, materials, and documents contained within the Bluestar premises are not generally known; each and every person intending to enter the Bluestar premises, on that person’s own behalf and/or on behalf of that person’s employer, any affiliate, or subsidiary thereof (referred to collectively as “Visitor”), agrees to this Confidentiality Agreement by signing in.\n' +
                'As a condition for entry into the Bluestar premises and other good and valuable consideration, Visitor agrees that:\n' +
                '1. Visitor understands that having access to Bluestar’s facility may result in being exposed to Bluestar’s highly confidential, proprietary, and/or trade secret information (“Confidential Information”).\n' +
                '2. Visitor understands, acknowledges and agrees that Bluestar’s Confidential Information is extremely valuable to it and is sufficiently secret to derive economic value, actual or potential, from not being generally known by others, including Bluestar’s competitors, and is the subject of efforts that are reasonable to maintain its secrecy or confidentiality. Bluestar’s Confidential Information includes, but shall not be limited to: Whereas, Visitor desires to visit Bluestar Silicones USA Corp.’s (“Bluestar”) facility for legitimate business purposes directly and only related to Visitor’s business and/or proposed business with Bluestar;\n' +
                'Whereas, Visitor recognizes, agrees, and understands that Bluestar would not provide Visitor with any access in or to its facility unless Visitor first agreed to be bound by, and to fully comply with, the terms and provisions of this Agreement;\n' +
                'Whereas, the Bluestar premises are not open to the public, and the equipment, materials, and documents contained within the Bluestar premises are not generally known; each and every person intending to enter the Bluestar premises, on that person’s own behalf and/or on behalf of that person’s employer, any affiliate, or subsidiary thereof (referred to collectively as “Visitor”), agrees to this Confidentiality Agreement by signing in.\n' +
                'As a condition for entry into the Bluestar premises and other good and valuable consideration, Visitor agrees that:\n' +
                '1. Visitor understands that having access to Bluestar’s facility may result in being exposed to Bluestar’s highly confidential, proprietary, and/or trade secret information (“Confidential Information”).\n' +
                '2. Visitor understands, acknowledges and agrees that Bluestar’s Confidential Information is extremely valuable to it and is sufficiently secret to derive economic value, actual or potential, from not being generally known by others, including Bluestar’s competitors, and is the subject of efforts that are reasonable to maintain its secrecy or confidentiality. Bluestar’s Confidential Information includes, but shall not be limited to: Whereas, Visitor desires to visit Bluestar Silicones USA Corp.’s (“Bluestar”) facility for legitimate business purposes directly and only related to Visitor’s business and/or proposed business with Bluestar;\n' +
                'Whereas, Visitor recognizes, agrees, and understands that Bluestar would not provide Visitor with any access in or to its facility unless Visitor first agreed to be bound by, and to fully comply with, the terms and provisions of this Agreement;\n' +
                'Whereas, the Bluestar premises are not open to the public, and the equipment, materials, and documents contained within the Bluestar premises are not generally known; each and every person intending to enter the Bluestar premises, on that person’s own behalf and/or on behalf of that person’s employer, any affiliate, or subsidiary thereof (referred to collectively as “Visitor”), agrees to this Confidentiality Agreement by signing in.\n' +
                'As a condition for entry into the Bluestar premises and other good and valuable consideration, Visitor agrees that:\n' +
                '1. Visitor understands that having access to Bluestar’s facility may result in being exposed to Bluestar’s highly confidential, proprietary, and/or trade secret information (“Confidential Information”).\n' +
                '2. Visitor understands, acknowledges and agrees that Bluestar’s Confidential Information is extremely valuable to it and is sufficiently secret to derive economic value, actual or potential, from not being generally known by others, including Bluestar’s competitors, and is the subject of efforts that are reasonable to maintain its secrecy or confidentiality. Bluestar’s Confidential Information includes, but shall not be limited to: Whereas, Visitor desires to visit Bluestar Silicones USA Corp.’s (“Bluestar”) facility for legitimate business purposes directly and only related to Visitor’s business and/or proposed business with Bluestar;\n' +
                'Whereas, Visitor recognizes, agrees, and understands that Bluestar would not provide Visitor with any access in or to its facility unless Visitor first agreed to be bound by, and to fully comply with, the terms and provisions of this Agreement;\n' +
                'Whereas, the Bluestar premises are not open to the public, and the equipment, materials, and documents contained within the Bluestar premises are not generally known; each and every person intending to enter the Bluestar premises, on that person’s own behalf and/or on behalf of that person’s employer, any affiliate, or subsidiary thereof (referred to collectively as “Visitor”), agrees to this Confidentiality Agreement by signing in.\n' +
                'As a condition for entry into the Bluestar premises and other good and valuable consideration, Visitor agrees that:\n' +
                '1. Visitor understands that having access to Bluestar’s facility may result in being exposed to Bluestar’s highly confidential, proprietary, and/or trade secret information (“Confidential Information”).\n' +
                '2. Visitor understands, acknowledges and agrees that Bluestar’s Confidential Information is extremely valuable to it and is sufficiently secret to derive economic value, actual or potential, from not being generally known by others, including Bluestar’s competitors, and is the subject of efforts that are reasonable to maintain its secrecy or confidentiality. Bluestar’s Confidential Information includes, but shall not be limited to: '],
    }
];
DemoDataService.inductionForm = [
    {
        question: 'I confrim i have been issued with all of the following PPE',
        note: 'is a text for the above question',
        required: true,
        options: [
            { title: 'Hard Hat', value: 1 },
            { title: 'Safety Glasses', value: 2 },
            { title: 'Safety Footware', value: 3 },
            { title: 'High Visibility Vest', value: 4 },
            { title: 'Hearing Protection', value: 5 },
        ]
    },
    {
        question: 'How long is this induction valid?',
        required: true,
        options: [
            { title: '1 Week', value: 1 },
            { title: '1 Month', value: 2 },
            { title: '1 year', value: 3 },
        ],
    }
];
DemoDataService.riskAssesmentQuestions = [
    {
        question: 'Task requires you to lorem ipsum dolor sit amet, consectetur adis um ing elit.',
        note: 'is a text for the above question',
        required: true,
        document: {
            title: 'Example of clean site cabin',
        },
        assestment: [],
    },
    {
        question: 'Task requires you to lorem ipsum dolor sit amet, consectetur adis um ing elit.',
        note: 'is a text for the above question',
        required: true,
        document: {
            title: 'Example of clean site cabin',
        },
        assestment: [],
    },
    {
        question: 'Task requires you to lorem ipsum dolor sit amet, consectetur adis um ing elit.',
        note: 'is a text for the above question',
        required: true,
        document: {
            title: 'Example of clean site cabin',
        },
        assestment: [],
    },
    {
        question: 'Task requires you to lorem ipsum dolor sit amet, consectetur adis um ing elit.',
        note: 'is a text for the above question',
        required: true,
        document: {
            title: 'Example of clean site cabin',
        },
        assestment: [],
    },
    {
        question: 'Task requires you to lorem ipsum dolor sit amet, consectetur adis um ing elit.',
        note: 'is a text for the above question',
        required: true,
        document: {
            title: 'Example of clean site cabin',
        },
        assestment: [],
    },
    {
        question: 'Task requires you to lorem ipsum dolor sit amet, consectetur adis um ing elit.',
        note: 'is a text for the above question',
        required: true,
        document: {
            title: 'Example of clean site cabin',
        },
        assestment: [],
    },
    {
        question: 'Task requires you to lorem ipsum dolor sit amet, consectetur adis um ing elit.',
        note: 'is a text for the above question',
        required: true,
        document: {
            title: 'Example of clean site cabin',
        },
        assestment: [],
    },
    {
        question: 'Task requires you to lorem ipsum dolor sit amet, consectetur adis um ing elit.',
        note: 'is a text for the above question',
        required: true,
        document: {
            title: 'Example of clean site cabin',
        },
        assestment: [],
    }
];
DemoDataService.timeZones = [
    {
        offset: 'GMT-12:00',
        name: 'Etc/GMT-12'
    },
    {
        offset: 'GMT-11:00',
        name: 'Etc/GMT-11'
    },
    {
        offset: 'GMT-11:00',
        name: 'Pacific/Midway'
    },
    {
        offset: 'GMT-10:00',
        name: 'America/Adak'
    },
    {
        offset: 'GMT-09:00',
        name: 'America/Anchorage'
    },
    {
        offset: 'GMT-09:00',
        name: 'Pacific/Gambier'
    },
    {
        offset: 'GMT-08:00',
        name: 'America/Dawson_Creek'
    },
    {
        offset: 'GMT-08:00',
        name: 'America/Ensenada'
    },
    {
        offset: 'GMT-08:00',
        name: 'America/Los_Angeles'
    },
    {
        offset: 'GMT-07:00',
        name: 'America/Chihuahua'
    },
    {
        offset: 'GMT-07:00',
        name: 'America/Denver'
    },
    {
        offset: 'GMT-06:00',
        name: 'America/Belize'
    },
    {
        offset: 'GMT-06:00',
        name: 'America/Cancun'
    },
    {
        offset: 'GMT-06:00',
        name: 'America/Chicago'
    },
    {
        offset: 'GMT-06:00',
        name: 'Chile/EasterIsland'
    },
    {
        offset: 'GMT-05:00',
        name: 'America/Bogota'
    },
    {
        offset: 'GMT-05:00',
        name: 'America/Havana'
    },
    {
        offset: 'GMT-05:00',
        name: 'America/New_York'
    },
    {
        offset: 'GMT-04:30',
        name: 'America/Caracas'
    },
    {
        offset: 'GMT-04:00',
        name: 'America/Campo_Grande'
    },
    {
        offset: 'GMT-04:00',
        name: 'America/Glace_Bay'
    },
    {
        offset: 'GMT-04:00',
        name: 'America/Goose_Bay'
    },
    {
        offset: 'GMT-04:00',
        name: 'America/Santiago'
    },
    {
        offset: 'GMT-04:00',
        name: 'America/La_Paz'
    },
    {
        offset: 'GMT-03:00',
        name: 'America/Argentina/Buenos_Aires'
    },
    {
        offset: 'GMT-03:00',
        name: 'America/Montevideo'
    },
    {
        offset: 'GMT-03:00',
        name: 'America/Araguaina'
    },
    {
        offset: 'GMT-03:00',
        name: 'America/Godthab'
    },
    {
        offset: 'GMT-03:00',
        name: 'America/Miquelon'
    },
    {
        offset: 'GMT-03:00',
        name: 'America/Sao_Paulo'
    },
    {
        offset: 'GMT-03:30',
        name: 'America/St_Johns'
    },
    {
        offset: 'GMT-02:00',
        name: 'America/Noronha'
    },
    {
        offset: 'GMT-01:00',
        name: 'Atlantic/Cape_Verde'
    },
    {
        offset: 'GMT',
        name: 'Europe/Belfast'
    },
    {
        offset: 'GMT',
        name: 'Africa/Abidjan'
    },
    {
        offset: 'GMT',
        name: 'Europe/Dublin'
    },
    {
        offset: 'GMT',
        name: 'Europe/Lisbon'
    },
    {
        offset: 'GMT',
        name: 'Europe/London'
    },
    {
        offset: 'UTC',
        name: 'UTC'
    },
    {
        offset: 'GMT+01:00',
        name: 'Africa/Algiers'
    },
    {
        offset: 'GMT+01:00',
        name: 'Africa/Windhoek'
    },
    {
        offset: 'GMT+01:00',
        name: 'Atlantic/Azores'
    },
    {
        offset: 'GMT+01:00',
        name: 'Atlantic/Stanley'
    },
    {
        offset: 'GMT+01:00',
        name: 'Europe/Amsterdam'
    },
    {
        offset: 'GMT+01:00',
        name: 'Europe/Belgrade'
    },
    {
        offset: 'GMT+01:00',
        name: 'Europe/Brussels'
    },
    {
        offset: 'GMT+02:00',
        name: 'Africa/Cairo'
    },
    {
        offset: 'GMT+02:00',
        name: 'Africa/Blantyre'
    },
    {
        offset: 'GMT+02:00',
        name: 'Asia/Beirut'
    },
    {
        offset: 'GMT+02:00',
        name: 'Asia/Damascus'
    },
    {
        offset: 'GMT+02:00',
        name: 'Asia/Gaza'
    },
    {
        offset: 'GMT+02:00',
        name: 'Asia/Jerusalem'
    },
    {
        offset: 'GMT+03:00',
        name: 'Africa/Addis_Ababa'
    },
    {
        offset: 'GMT+03:00',
        name: 'Asia/Riyadh89'
    },
    {
        offset: 'GMT+03:00',
        name: 'Europe/Minsk'
    },
    {
        offset: 'GMT+03:30',
        name: 'Asia/Tehran'
    },
    {
        offset: 'GMT+04:00',
        name: 'Asia/Dubai'
    },
    {
        offset: 'GMT+04:00',
        name: 'Asia/Yerevan'
    },
    {
        offset: 'GMT+04:00',
        name: 'Europe/Moscow'
    },
    {
        offset: 'GMT+04:30',
        name: 'Asia/Kabul'
    },
    {
        offset: 'GMT+05:00',
        name: 'Asia/Tashkent'
    },
    {
        offset: 'GMT+05:30',
        name: 'Asia/Kolkata'
    },
    {
        offset: 'GMT+05:45',
        name: 'Asia/Katmandu'
    },
    {
        offset: 'GMT+06:00',
        name: 'Asia/Dhaka'
    },
    {
        offset: 'GMT+06:00',
        name: 'Asia/Yekaterinburg'
    },
    {
        offset: 'GMT+06:30',
        name: 'Asia/Rangoon'
    },
    {
        offset: 'GMT+07:00',
        name: 'Asia/Bangkok'
    },
    {
        offset: 'GMT+07:00',
        name: 'Asia/Novosibirsk'
    },
    {
        offset: 'GMT+08:00',
        name: 'Etc/GMT+8'
    },
    {
        offset: 'GMT+08:00',
        name: 'Asia/Hong_Kong'
    },
    {
        offset: 'GMT+08:00',
        name: 'Asia/Krasnoyarsk'
    },
    {
        offset: 'GMT+08:00',
        name: 'Australia/Perth'
    },
    {
        offset: 'GMT+08:45',
        name: 'Australia/Eucla'
    },
    {
        offset: 'GMT+09:00',
        name: 'Asia/Irkutsk'
    },
    {
        offset: 'GMT+09:00',
        name: 'Asia/Seoul'
    },
    {
        offset: 'GMT+09:00',
        name: 'Asia/Tokyo'
    },
    {
        offset: 'GMT+09:30',
        name: 'Australia/Adelaide'
    },
    {
        offset: 'GMT+09:30',
        name: 'Australia/Darwin'
    },
    {
        offset: 'GMT+09:30',
        name: 'Pacific/Marquesas'
    },
    {
        offset: 'GMT+10:00',
        name: 'Etc/GMT+10'
    },
    {
        offset: 'GMT+10:00',
        name: 'Australia/Brisbane'
    },
    {
        offset: 'GMT+10:00',
        name: 'Australia/Hobart'
    },
    {
        offset: 'GMT+10:00',
        name: 'Asia/Yakutsk'
    },
    {
        offset: 'GMT+10:30',
        name: 'Australia/Lord_Howe'
    },
    {
        offset: 'GMT+11:00',
        name: 'Asia/Vladivostok'
    },
    {
        offset: 'GMT+11:30',
        name: 'Pacific/Norfolk'
    },
    {
        offset: 'GMT+12:00',
        name: 'Etc/GMT+12'
    },
    {
        offset: 'GMT+12:00',
        name: 'Asia/Anadyr'
    },
    {
        offset: 'GMT+12:00',
        name: 'Asia/Magadan'
    },
    {
        offset: 'GMT+12:00',
        name: 'Pacific/Auckland'
    },
    {
        offset: 'GMT+12:45',
        name: 'Pacific/Chatham'
    },
    {
        offset: 'GMT+13:00',
        name: 'Pacific/Tongatapu'
    },
    {
        offset: 'GMT+14:00',
        name: 'Pacific/Kiritimati'
    }
];
DemoDataService.languages = [
    { name: 'English', code: 'en' },
    { name: 'Dutch', code: 'nl' }
];
DemoDataService.locations = [
    { name: 'Demo Location 1', id: 1 },
    { name: 'Demo Location 2', id: 2 },
    { name: 'Demo Location 3', id: 3 },
    { name: 'Demo Location 4', id: 4 },
    { name: 'Demo Location 5', id: 5 },
    { name: 'Demo Location 6', id: 6 },
    { name: 'Demo Location 7', id: 7 },
    { name: 'Demo Location 8', id: 8 },
    { name: 'Demo Location 9', id: 9 },
    { name: 'Demo Location 10', id: 10 },
];
DemoDataService.users = [
    { name: 'User One', id: 1 },
    { name: 'User Two', id: 2 },
    { name: 'User Three', id: 3 },
    { name: 'User Four', id: 4 },
    { name: 'User Five', id: 5 },
    { name: 'User One', id: 6 },
    { name: 'User Two', id: 7 },
    { name: 'User Three', id: 8 },
    { name: 'User Four', id: 9 },
    { name: 'User Five', id: 10 },
    { name: 'User One', id: 11 },
    { name: 'User Two', id: 12 },
    { name: 'User Three', id: 13 },
    { name: 'User Four', id: 14 },
    { name: 'User Five', id: 15 },
];
DemoDataService.usersGroups = [
    { name: 'Group One', id: 1 },
    { name: 'Group Two', id: 2 },
    { name: 'Group Three', id: 3 },
    { name: 'Group Four', id: 4 },
    { name: 'Group Five', id: 5 },
];
DemoDataService.termsConditionsText = 'What is Lorem Ipsum?\n' +
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
    '\n' +
    'Why do we use it?\n' +
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
    '\n' +
    '\n' +
    'Where does it come from?\n' +
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
    '\n' +
    'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.';
DemoDataService.ctorParameters = () => [];
DemoDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DemoDataService);



/***/ })

}]);