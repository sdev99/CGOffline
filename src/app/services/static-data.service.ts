import {Injectable} from '@angular/core';
import {EnumService} from './enum.service';

@Injectable({
    providedIn: 'root'
})
export class StaticDataService {

    static dateTimeFormat = 'YYYY-MM-DD HH:mm:00.000';
    static dateTimeFormatAMPM = 'YYYY-MM-DD hh:mm A';
    static dateFormat = 'YYYY-MM-DD';
    static timeFormat = 'hh:mmA';

    static riskRatings = [
        {title: '1 Low', class: 'risk-rating-low', value: 1},
        {title: '2 Low', class: 'risk-rating-low', value: 2},
        {title: '3 Low', class: 'risk-rating-low', value: 3},
        {title: '4 Moderate', class: 'risk-rating-moderate', value: 4},
        {title: '5 Moderate', class: 'risk-rating-moderate', value: 5},
        {title: '6 Moderate', class: 'risk-rating-moderate', value: 6},
        {title: '8 High', class: 'risk-rating-high', value: 8},
        {title: '9 High', class: 'risk-rating-high', value: 9},
        {title: '10 High', class: 'risk-rating-high', value: 10},
        {title: '12 High', class: 'risk-rating-high', value: 12},
        {title: '15 Extreme', class: 'risk-rating-extreme', value: 15},
        {title: '16 Extreme', class: 'risk-rating-extreme', value: 16},
        {title: '20 Extreme', class: 'risk-rating-extreme', value: 20},
        {title: '25 Extreme', class: 'risk-rating-extreme', value: 25},
    ];

    static types = [
        {name: 'Struck by', id: 'StruckBy'},
        {name: 'Falls From Height', id: 'FallsFromHeight'},
        {name: 'Cuts, Bruises and Bumps', id: 'CutsBruisesAndBumps'},
        {name: 'Vehicle Movements', id: 'VehicleMovements'},
        {name: 'Confined Space Entry', id: 'ConfinedSpaceEntry'},
        {name: 'Medical Incident', id: 'MdeicalIncident'},
        {name: 'Strains and Pains', id: 'StrainsAndPains'},
        {name: 'Lifting Pulling and Pushing', id: 'LiftingPullingAndPushing'},
        {name: 'Injury From Tools', id: 'InjuryFromTools'},
        {name: 'Dropped Objects', id: 'DroppedObjects'},
        {name: 'Caught in Between', id: 'CaughtInBetween'},
        {name: 'Acts of Violence', id: 'ActsofViolence'},
        {name: 'Contacts With Moving Parts', id: 'ContactsWithMovingParts'}
    ];

    static classifications = [
        {name: 'Death to a person', id: 'Fatalities'},
        {name: 'Lost time injury', id: 'LTI', description: 'Normally 3 days or more'},
        {name: 'Restricted work case', id: 'RWC', description: 'Restricted duties'},
        {name: 'Medical treatment case', id: 'MTC', description: 'Medical treatment required, normally from a professional'},
        {name: 'First aid treatment case', id: 'FATC', description: 'First aid administered, normally by a trained first aider'},
        {
            name: 'Loss of containment',
            id: 'LOC',
            description: 'Loss of anything that is normally contained - Example, gas, water, chemicals,\n' +
                'fire, asbestos'
        },
        {name: 'Near miss', id: 'NM', description: 'a 10 feet pipe lagging fell narrowly missing employee'},
    ];

    static bodyParts = [
        {
            type: 'Head',
            parts: [
                {
                    name: 'Head Soft Tissue',
                    id: EnumService.AccidentBodyPartsIds.HeadSoftTissue,
                    path: {
                        fill: '#A1A8CA',
                        stroke: '#CACEE1'
                    }
                },
                {
                    name: 'Face',
                    id: EnumService.AccidentBodyPartsIds.HeadFace,
                    path: {
                        fill: '#A1A8CA',
                        stroke: '#CACEE1'
                    }
                }
            ]
        },
        {
            type: 'Torso',
            parts: [
                {
                    name: 'Abdomen',
                    id: EnumService.AccidentBodyPartsIds.TorsoAbdomen,
                    path: {
                        fill: '#A1A8CA'
                    }
                },
                {
                    name: 'Chest',
                    id: EnumService.AccidentBodyPartsIds.TorsoChest,
                    path: {
                        fill: '#A0A8C9',
                        stroke: '#CACEE1'
                    }
                },
                {
                    name: 'Neck',
                    id: EnumService.AccidentBodyPartsIds.TorsoNeck,
                    path: {
                        fill: '#A1A8CA',
                        stroke: '#CACEE1'
                    }
                },
                {
                    name: 'Ribs',
                    id: EnumService.AccidentBodyPartsIds.TorsoRibs,
                    path: {
                        fill: '#B6BEDF',
                        stroke: '#CACEE1'
                    }
                },
            ]
        },
        {
            type: 'Back',
            parts: [
                {
                    name: 'Upper Back',
                    id: EnumService.AccidentBodyPartsIds.BackUpperBack,
                    path: {
                        fill: '#8B93B8'
                    }
                },
                {
                    name: 'Lower Back',
                    id: EnumService.AccidentBodyPartsIds.BackLowerBack,
                    path: {
                        fill: '#8B93B8'
                    }
                },
                {
                    name: 'Buttocks',
                    id: EnumService.AccidentBodyPartsIds.BackButtocks,
                    path: {
                        fill: '#8B93B8'
                    }
                },
            ]
        },
        {
            type: 'Arms',
            parts: [
                {
                    name: 'Shoulder - Right',
                    id: EnumService.AccidentBodyPartsIds.ArmsShoulderRight,
                    path: {
                        fill: '#A1A8CA',
                        stroke: '#CACEE1',
                    }
                },
                {
                    name: 'Shoulder - Left',
                    id: EnumService.AccidentBodyPartsIds.ArmsShoulderLeft,
                    path: {
                        fill: '#A1A8CA',
                        stroke: '#CACEE1',
                    }
                },
                {
                    name: 'Elbow - Right',
                    id: EnumService.AccidentBodyPartsIds.ArmsElbowRight,
                    path: {
                        fill: '#A1A8CA',
                        stroke: '#CACEE1',
                        strokeWidth: 2.44942
                    }
                },
                {
                    name: 'Elbow - Left',
                    id: EnumService.AccidentBodyPartsIds.ArmsElbowLeft,
                    path: {
                        fill: '#A1A8CA',
                        stroke: '#CACEE1',
                        strokeWidth: 2.44942
                    }
                },
                {
                    name: 'Lower Arm - Right',
                    id: EnumService.AccidentBodyPartsIds.ArmsLowerRight,
                    path: {
                        fill: '#A0A8C9'
                    }
                },
                {
                    name: 'Lower Arm - Left',
                    id: EnumService.AccidentBodyPartsIds.ArmsLowerLeft,
                    path: {
                        fill: '#A0A8C9'
                    }
                },
                {
                    name: 'Wrist - Right',
                    id: EnumService.AccidentBodyPartsIds.ArmsWristRight,
                    path: {
                        fill: '#A0A8C9'
                    }
                },
                {
                    name: 'Wrist - Left',
                    id: EnumService.AccidentBodyPartsIds.ArmsWristLeft,
                    path: {
                        fill: '#A0A8C9'
                    }
                },
                {
                    name: 'Hand - Right',
                    id: EnumService.AccidentBodyPartsIds.ArmsHandRight,
                    path: {
                        fill: '#A0A8C9'
                    }
                },
                {
                    name: 'Hand - Left',
                    id: EnumService.AccidentBodyPartsIds.ArmsHandLeft,
                    path: {
                        fill: '#A0A8C9'
                    }
                },
                {
                    name: 'Finger - Right',
                    id: EnumService.AccidentBodyPartsIds.ArmsFingerRight,
                    path: {
                        fill: '#A0A8C9'
                    }
                },
                {
                    name: 'Finger - Left',
                    id: EnumService.AccidentBodyPartsIds.ArmsFingerLeft,
                    path: {
                        fill: '#A0A8C9'
                    }
                },
            ]
        },
        {
            type: 'Legs',
            parts: [
                {
                    name: 'Ankle - Right',
                    id: EnumService.AccidentBodyPartsIds.LegsAnkleRight,
                    path: {
                        fill: '#A0A8C9'
                    }
                },
                {
                    name: 'Ankle - Left',
                    id: EnumService.AccidentBodyPartsIds.LegsAnkleLeft,
                    path: {
                        fill: '#A0A8C9'
                    }
                },
                {
                    name: 'Foot - Right',
                    id: EnumService.AccidentBodyPartsIds.LegsFootRight,
                    path: {
                        fill: '#A0A8C9'
                    }
                },
                {
                    name: 'Foot - Left',
                    id: EnumService.AccidentBodyPartsIds.LegsFootLeft,
                    path: {
                        fill: '#A0A8C9'
                    }
                },
                {
                    name: 'Knee - Right',
                    id: EnumService.AccidentBodyPartsIds.LegsKneeRight,
                    path: {
                        fill: '#A0A8C9'
                    }
                },
                {
                    name: 'Knee - Left',
                    id: EnumService.AccidentBodyPartsIds.LegsKneeLeft,
                    path: {
                        fill: '#A0A8C9'
                    }
                },
                {
                    name: 'Upper Leg - Right',
                    id: EnumService.AccidentBodyPartsIds.LegsUpperRight,
                    path: {
                        fill: '#A0A8C9'
                    }
                },
                {
                    name: 'Upper Leg - Left',
                    id: EnumService.AccidentBodyPartsIds.LegsUpperLeft,
                    path: {
                        fill: '#A0A8C9'
                    }
                },
                {
                    name: 'Toe - Right',
                    id: EnumService.AccidentBodyPartsIds.LegsToeRight,
                    path: {
                        fill: '#A0A8C9'
                    }
                },
                {
                    name: 'Toe - Left',
                    id: EnumService.AccidentBodyPartsIds.LegsToeLeft,
                    path: {
                        fill: '#A0A8C9'
                    }
                },
            ]
        }
    ];


    static fileMimeTypes = {
        '3dmf': 'x-world/x-3dmf',
        '3dm': 'x-world/x-3dmf',
        avi: 'video/x-msvideo',
        ai: 'application/postscript',
        bin: 'application/octet-stream',
        bmp: 'image/bmp',
        cab: 'application/x-shockwave-flash',
        c: 'text/plain',
        'c++': 'text/plain',
        class: 'application/java',
        css: 'text/css',
        csv: 'text/comma-separated-values',
        cdr: 'application/cdr',
        doc: 'application/msword',
        dot: 'application/msword',
        docx: 'application/msword',
        dwg: 'application/acad',
        eps: 'application/postscript',
        exe: 'application/octet-stream',
        gif: 'image/gif',
        gz: 'application/gzip',
        gtar: 'application/x-gtar',
        flv: 'video/x-flv',
        fh4: 'image/x-freehand',
        fh5: 'image/x-freehand',
        fhc: 'image/x-freehand',
        help: 'application/x-helpfile',
        hlp: 'application/x-helpfile',
        html: 'text/html',
        htm: 'text/html',
        ico: 'image/x-icon',
        imap: 'application/x-httpd-imap',
        inf: 'application/inf',
        jpe: 'image/jpeg',
        jpeg: 'image/jpeg',
        jpg: 'image/jpeg',
        js: 'application/x-javascript',
        java: 'text/x-java-source',
        latex: 'application/x-latex',
        log: 'text/plain',
        m3u: 'audio/x-mpequrl',
        midi: 'audio/midi',
        mid: 'audio/midi',
        mov: 'video/quicktime',
        mp3: 'audio/mpeg',
        mpeg: 'video/mpeg',
        mpg: 'video/mpeg',
        mp2: 'video/mpeg',
        mp4: 'video/mp4',
        ogg: 'application/ogg',
        phtml: 'application/x-httpd-php',
        php: 'application/x-httpd-php',
        pdf: 'application/pdf',
        pgp: 'application/pgp',
        png: 'image/png',
        pps: 'application/mspowerpoint',
        ppt: 'application/mspowerpoint',
        ppz: 'application/mspowerpoint',
        pot: 'application/mspowerpoint',
        ps: 'application/postscript',
        qt: 'video/quicktime',
        qd3d: 'x-world/x-3dmf',
        qd3: 'x-world/x-3dmf',
        qxd: 'application/x-quark-express',
        rar: 'application/x-rar-compressed',
        ra: 'audio/x-realaudio',
        ram: 'audio/x-pn-realaudio',
        rm: 'audio/x-pn-realaudio',
        rtf: 'text/rtf',
        spr: 'application/x-sprite',
        sprite: 'application/x-sprite',
        stream: 'audio/x-qt-stream',
        swf: 'application/x-shockwave-flash',
        svg: 'text/xml-svg',
        sgml: 'text/x-sgml',
        sgm: 'text/x-sgml',
        tar: 'application/x-tar',
        tiff: 'image/tiff',
        tif: 'image/tiff',
        tgz: 'application/x-compressed',
        tex: 'application/x-tex',
        txt: 'text/plain',
        vob: 'video/x-mpg',
        wav: 'audio/x-wav',
        wrl: 'x-world/x-vrml',
        xla: 'application/msexcel',
        xlsx: 'application/msexcel',
        xls: 'application/vnd.ms-excel',
        xlc: 'application/vnd.ms-excel',
        xml: 'text/xml',
        zip: 'application/zip',
    };
}
