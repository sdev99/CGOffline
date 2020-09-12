import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DemoDataService {

    static activityList = [
        {
            status: 'overdue',
            highprority: false,
            time: 'Last week',
            name: 'Audit Demo Location 1',
        },
        {
            status: 'overdue',
            highprority: false,
            time: 'Last week',
            name: 'Audit Demo Location 1',
        },
        {
            status: 'overdue',
            highprority: false,
            time: 'Last week',
            name: 'High priority and overdue activity goes here',
        },
        {
            status: 'rejected',
            highprority: false,
            time: 'Yesterday',
            name: 'High priority activity goes here',
        },
        {
            status: 'active',
            highprority: false,
            time: 'Today',
            name: 'Regular activity title goes here on a single line of...',
        },
        {
            status: 'active',
            highprority: false,
            time: 'Today',
            name: 'Just a simple overdue activity title goes here',
        }
    ];

    static activityCustomForm = [
        {
            question_type: 'options',
            question: 'Please rate site cabin cleanliness from (1-5)',
            note: 'is a text for the above question',
            required: true,
            document: {
                title: 'Example of clean site cabin',
            },
            options: [
                {title: '1 poor', value: 1, color: '#E74731'},
                {title: '2 Below Average', value: 2, color: '#FF8049'},
                {title: '3 Average', value: 3, color: '#FFBA00'},
                {title: '4 Above Average', value: 4, color: '#1CF583'},
                {title: '5 Excellent', value: 5, color: '#14B05E'},
            ],
            canMultipleAsnwer: false
        },

        {
            question_type: 'image',
            question: 'Please take picture of Site cabin',
            required: true,
        },

        {
            question_type: 'options',
            question: 'Are all Safety signs in place?',
            required: true,
            note: 'is a text for the above question',
            options: [
                {title: 'Yes', value: 1},
                {title: 'No', value: 0},
                {title: 'N/A', value: -1},
            ],
            isAdditionalComment: true,
            canMultipleAsnwer: true
        },

        {
            question_type: 'date',
            question: 'Date on scarffold tag',
        },
    ];

    static inductionForm = [
        {
            question: 'I confrim i have been issued with all of the following PPE',
            note: 'is a text for the above question',
            options: [
                {title: 'Hard Hat', value: 1},
                {title: 'Safety Glasses', value: 2},
                {title: 'Safety Footware', value: 3},
                {title: 'High Visibility Vest', value: 4},
                {title: 'Hearing Protection', value: 5},
            ]
        },
        {
            question: 'How long is this induction valid?',
            options: [
                {title: '1 Week', value: 1},
                {title: '1 Month', value: 2},
                {title: '1 year', value: 3},
            ],
        }
    ];

    constructor() {
    }
}
