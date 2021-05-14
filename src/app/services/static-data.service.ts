import { Injectable } from '@angular/core';
import { EnumService } from './enum.service';

@Injectable({
	providedIn: 'root',
})
export class StaticDataService {
	static dateTimeFormat = 'YYYY-MM-DD HH:mm:00.000';
	static dateTimeFormatAMPM = 'YYYY-MM-DD hh:mm A';
	static dateFormat = 'YYYY-MM-DD';
	static timeFormat = 'hh:mmA';
	static photoQuality = 85;
	static photoMaxHeight = 2500;
	static userDefaultGuid = '00000000-0000-0000-0000-000000000000';

	// Test demo - should be remove after development complete
	static anyScreenTestLocalStoragekey = 'screen_to_test';
	static isDeviceTestTablet = 'is_device_test_tablet';
	static disableExifHeaderStripping = 'disableExifHeaderStripping';
	// end

	static bodyParts = [
		{
			type: 'Head',
			langkey: 'HEAD',
			parts: [
				{
					name: 'Head Soft Tissue',
					langkey: 'HEAD_SOFT_TISSUE',
					id: EnumService.AccidentBodyPartsIds.HeadSoftTissue,
					path: {
						fill: '#A1A8CA',
						stroke: '#CACEE1',
					},
				},
				{
					name: 'Face',
					langkey: 'FACE',
					id: EnumService.AccidentBodyPartsIds.HeadFace,
					path: {
						fill: '#A1A8CA',
						stroke: '#CACEE1',
					},
				},
			],
		},
		{
			type: 'Torso',
			langkey: 'TORSO',
			parts: [
				{
					name: 'Abdomen',
					langkey: 'ABDOMEN',
					id: EnumService.AccidentBodyPartsIds.TorsoAbdomen,
					path: {
						fill: '#A1A8CA',
					},
				},
				{
					name: 'Chest',
					langkey: 'CHEST',
					id: EnumService.AccidentBodyPartsIds.TorsoChest,
					path: {
						fill: '#A0A8C9',
						stroke: '#CACEE1',
					},
				},
				{
					name: 'Neck',
					langkey: 'NECK',
					id: EnumService.AccidentBodyPartsIds.TorsoNeck,
					path: {
						fill: '#A1A8CA',
						stroke: '#CACEE1',
					},
				},
				{
					name: 'Ribs',
					langkey: 'RIBS',
					id: EnumService.AccidentBodyPartsIds.TorsoRibs,
					path: {
						fill: '#B6BEDF',
						stroke: '#CACEE1',
					},
				},
			],
		},
		{
			type: 'Back',
			langkey: 'BACK',
			parts: [
				{
					name: 'Upper Back',
					langkey: 'UPPER_BACK',
					id: EnumService.AccidentBodyPartsIds.BackUpperBack,
					path: {
						fill: '#8B93B8',
					},
				},
				{
					name: 'Lower Back',
					langkey: 'LOWER_BACK',
					id: EnumService.AccidentBodyPartsIds.BackLowerBack,
					path: {
						fill: '#8B93B8',
					},
				},
				{
					name: 'Buttocks',
					langkey: 'BUTTOCKS',
					id: EnumService.AccidentBodyPartsIds.BackButtocks,
					path: {
						fill: '#8B93B8',
					},
				},
			],
		},
		{
			type: 'Arms',
			langkey: 'ARMS',
			parts: [
				{
					name: 'Shoulder - Right',
					langkey: 'SHOULDER_RIGHT',
					id: EnumService.AccidentBodyPartsIds.ArmsShoulderRight,
					path: {
						fill: '#A1A8CA',
						stroke: '#CACEE1',
					},
				},
				{
					name: 'Shoulder - Left',
					langkey: 'SHOULDER_LEFT',
					id: EnumService.AccidentBodyPartsIds.ArmsShoulderLeft,
					path: {
						fill: '#A1A8CA',
						stroke: '#CACEE1',
					},
				},
				{
					name: 'Elbow - Right',
					langkey: 'ELBOW_RIGHT',
					id: EnumService.AccidentBodyPartsIds.ArmsElbowRight,
					path: {
						fill: '#A1A8CA',
						stroke: '#CACEE1',
						strokeWidth: 2.44942,
					},
				},
				{
					name: 'Elbow - Left',
					langkey: 'ELBOW_LEFT',
					id: EnumService.AccidentBodyPartsIds.ArmsElbowLeft,
					path: {
						fill: '#A1A8CA',
						stroke: '#CACEE1',
						strokeWidth: 2.44942,
					},
				},
				{
					name: 'Lower Arm - Right',
					langkey: 'LOWER_ARM_RIGHT',
					id: EnumService.AccidentBodyPartsIds.ArmsLowerRight,
					path: {
						fill: '#A0A8C9',
					},
				},
				{
					name: 'Lower Arm - Left',
					langkey: 'LOWER_ARM_LEFT',
					id: EnumService.AccidentBodyPartsIds.ArmsLowerLeft,
					path: {
						fill: '#A0A8C9',
					},
				},
				{
					name: 'Wrist - Right',
					langkey: 'WRIST_RIGHT',
					id: EnumService.AccidentBodyPartsIds.ArmsWristRight,
					path: {
						fill: '#A0A8C9',
					},
				},
				{
					name: 'Wrist - Left',
					langkey: 'WRIST_LEFT',
					id: EnumService.AccidentBodyPartsIds.ArmsWristLeft,
					path: {
						fill: '#A0A8C9',
					},
				},
				{
					name: 'Hand - Right',
					langkey: 'HAND_RIGHT',
					id: EnumService.AccidentBodyPartsIds.ArmsHandRight,
					path: {
						fill: '#A0A8C9',
					},
				},
				{
					name: 'Hand - Left',
					langkey: 'HAND_LEFT',
					id: EnumService.AccidentBodyPartsIds.ArmsHandLeft,
					path: {
						fill: '#A0A8C9',
					},
				},
				{
					name: 'Finger - Right',
					langkey: 'FINGER_RIGHT',
					id: EnumService.AccidentBodyPartsIds.ArmsFingerRight,
					path: {
						fill: '#A0A8C9',
					},
				},
				{
					name: 'Finger - Left',
					langkey: 'FINGER_LEFT',
					id: EnumService.AccidentBodyPartsIds.ArmsFingerLeft,
					path: {
						fill: '#A0A8C9',
					},
				},
			],
		},
		{
			type: 'Legs',
			langkey: 'LEGS',
			parts: [
				{
					name: 'Ankle - Right',
					langkey: 'ANKLE_RIGHT',
					id: EnumService.AccidentBodyPartsIds.LegsAnkleRight,
					path: {
						fill: '#A0A8C9',
					},
				},
				{
					name: 'Ankle - Left',
					langkey: 'ANKLE_LEFT',
					id: EnumService.AccidentBodyPartsIds.LegsAnkleLeft,
					path: {
						fill: '#A0A8C9',
					},
				},
				{
					name: 'Foot - Right',
					langkey: 'FOOT_RIGHT',
					id: EnumService.AccidentBodyPartsIds.LegsFootRight,
					path: {
						fill: '#A0A8C9',
					},
				},
				{
					name: 'Foot - Left',
					langkey: 'FOOT_LEFT',
					id: EnumService.AccidentBodyPartsIds.LegsFootLeft,
					path: {
						fill: '#A0A8C9',
					},
				},
				{
					name: 'Knee - Right',
					langkey: 'KNEE_RIGHT',
					id: EnumService.AccidentBodyPartsIds.LegsKneeRight,
					path: {
						fill: '#A0A8C9',
					},
				},
				{
					name: 'Knee - Left',
					langkey: 'KNEE_LEFT',
					id: EnumService.AccidentBodyPartsIds.LegsKneeLeft,
					path: {
						fill: '#A0A8C9',
					},
				},
				{
					name: 'Upper Leg - Right',
					langkey: 'UPPER_LEG_RIGHT',
					id: EnumService.AccidentBodyPartsIds.LegsUpperRight,
					path: {
						fill: '#A0A8C9',
					},
				},
				{
					name: 'Upper Leg - Left',
					langkey: 'UPPER_LEG_LEFT',
					id: EnumService.AccidentBodyPartsIds.LegsUpperLeft,
					path: {
						fill: '#A0A8C9',
					},
				},
				{
					name: 'Toe - Right',
					langkey: 'TOE_RIGHT',
					id: EnumService.AccidentBodyPartsIds.LegsToeRight,
					path: {
						fill: '#A0A8C9',
					},
				},
				{
					name: 'Toe - Left',
					langkey: 'TOE_LEFT',
					id: EnumService.AccidentBodyPartsIds.LegsToeLeft,
					path: {
						fill: '#A0A8C9',
					},
				},
			],
		},
	];

	static videoFormats = ['avi', 'flv', 'mov', 'mpeg', 'mpg', 'mp2', 'mp4', 'qt', 'vob', 'wmv', 'avchd', 'mkv', 'webm'];

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
