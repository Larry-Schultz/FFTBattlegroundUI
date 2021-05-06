import * as $ from 'jquery';
import { Allegiance } from 'src/app/model/playerRecord';

export function setTeamColor(teamName: string, elementId: string): void {
	const allegiance = teamName.toUpperCase() as Allegiance;
	setTeamColorByAllegiance(allegiance, elementId);
}

export function setTeamColorByAllegiance(teamName: Allegiance, elementId: string): void {
	const element = document.getElementById(elementId);
	switch (teamName) {
		case Allegiance.BLUE:
			element.style.color = 'blue';
			break;
		case Allegiance.WHITE:
			element.style.color = 'grey';
			break;
		case Allegiance.BLACK:
			element.style.color = 'black';
			break;
		case Allegiance.RED:
			element.style.color = 'red';
			break;
		case Allegiance.PURPLE:
			element.style.color = 'purple';
			break;
		case Allegiance.GREEN:
			element.style.color = 'green';
			break;
		case Allegiance.YELLOW:
			$('#' + elementId).css('color', 'rgb(204,204,0)'); // default yellow looks hideous
			break;
		case Allegiance.BROWN:
			element.style.color = 'brown';
			break;
		case Allegiance.CHAMPION:
			element.style.color = 'orange';
			break;
		default:
			break;
	}
}

export function setColor(elementId: string) {
	const element = document.getElementById(elementId);
	const teamName = $('#' + elementId).text();
	switch (teamName) {
		case 'BLUE':
			element.style.color = 'blue';
			break;
		case 'WHITE':
			element.style.color = 'grey';
			break;
		case 'BLACK':
			element.style.color = 'black';
			break;
		case 'RED':
			element.style.color = 'red';
			break;
		case 'PURPLE':
			element.style.color = 'purple';
			break;
		case 'GREEN':
			element.style.color = 'green';
			break;
		case 'YELLOW':
			$('#' + elementId).css('color', 'rgb(204,204,0)'); // default yellow looks hideous
			break;
		case 'BROWN':
			element.style.color = 'brown';
			break;
		case 'CHAMPION': case 'CHAMP':
			element.style.color = 'orange';
			break;
		case 'NONE':
			break;
	}
}

export function getColor(allegiance: Allegiance): string {
	let style = null;
	const cleanedAllegiance: Allegiance = allegiance as Allegiance;
	switch (cleanedAllegiance) {
		case Allegiance.BLUE:
			style = 'blue';
			break;
		case Allegiance.WHITE:
			style = 'grey';
			break;
		case Allegiance.BLACK:
			style = 'black';
			break;
		case Allegiance.RED:
			style = 'red';
			break;
		case Allegiance.PURPLE:
			style = 'purple';
			break;
		case Allegiance.GREEN:
			style = 'green';
			break;
		case Allegiance.YELLOW:
			style = 'rgb(204,204,0)'; // default yellow looks hideous
			break;
		case Allegiance.BROWN:
			style = 'brown';
			break;
		case Allegiance.CHAMPION:
			style = 'orange';
			break;
		case Allegiance.NONE: default:
			break;
	}

	return style;
}
