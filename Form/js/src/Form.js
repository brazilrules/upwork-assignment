import $ from "jquery";

const states = [ 
				 {value: 'AL', description: 'Alabama'},
				 {value: 'AK', description: 'Alaska'},
				 {value: 'AZ', description: 'Arizona'},
				 {value: 'AR', description: 'Arkansas'},
				 {value: 'CA', description: 'California'},
				 {value: 'CO', description: 'Colorado'},
				 {value: 'CT', description: 'Connecticut'},
				 {value: 'DE', description: 'Delaware'},
				 {value: 'FL', description: 'Florida'},
				 {value: 'GA', description: 'Georgia'},
				 {value: 'HI', description: 'Hawaii'},
				 {value: 'ID', description: 'Idaho'},
				 {value: 'IL', description: 'Illinois'},
				 {value: 'IN', description: 'Indiana'},
				 {value: 'IA', description: 'Iowa'},
				 {value: 'KS', description: 'Kansas'},
				 {value: 'KY', description: 'Kentucky'},
				 {value: 'LA', description: 'Louisiana'},
				 {value: 'ME', description: 'Maine'},
				 {value: 'MD', description: 'Maryland'},
				 {value: 'MA', description: 'Massachusetts'},
				 {value: 'MI', description: 'Michigan'},
				 {value: 'MN', description: 'Minnesota'},
				 {value: 'MO', description: 'Missouri'},
				 {value: 'MT', description: 'Montana'},
				 {value: 'NE', description: 'Nebraska'},
				 {value: 'NV', description: 'Nevada'},
				 {value: 'NH', description: 'New Hampshire'},
				 {value: 'NJ', description: 'New Jersey'},
				 {value: 'NM', description: 'New Mexico'},
				 {value: 'NY', description: 'New York'},
				 {value: 'NC', description: 'North Carolina'},
				 {value: 'ND', description: 'North Dakota'},
				 {value: 'OH', description: 'Ohio'},
				 {value: 'OK', description: 'Oklahoma'},
				 {value: 'OR', description: 'Oregon'},
				 {value: 'PA', description: 'Pennsylvania'},
				 {value: 'RI', description: 'Rhode Island'},
				 {value: 'SC', description: 'South Carolina'},
				 {value: 'SD', description: 'South Dakota'},
				 {value: 'SD', description: 'South Dakota'},
				 {value: 'TN', description: 'Tennessee'},
				 {value: 'TX', description: 'Texas'},
				 {value: 'UT', description: 'Utah'},
				 {value: 'VT', description: 'Vermont'},
				 {value: 'VA', description: 'Virginia'},
				 {value: 'WA', description: 'Washington'},
				 {value: 'WV', description: 'West Virginia'},
				 {value: 'WI', description: 'Wisconsin'},
				 {value: 'WY', description: 'Wyoming'}
			   ];

export default class Form {
	constructor() {
		this.form = $('form');
		for (let state of states) {
			this.form.find('#state').append(`<option value="${state.value}">${state.description}</option>`);
		}
		this.form.submit(this.validateFields.bind(this));
		this.form.find('#cancel-button').click(this.resetFields.bind(this));
		this.form.find('.input-group input.alpha').on('input', this.filterAlpha);
		this.form.find('.input-group input.number').on('input', this.filterNumber);
	}
	
	validateFields(e) {
		this.form.find('.input-group input').removeClass('error');
		this.form.find('.input-group input').removeClass('not-error');
		this.form.find('.input-group select').removeClass('error');
		this.form.find('.input-group p.error').html('');
		
		let nameField = this.form.find('#name');
		if (!nameField.val().length) {
			nameField.addClass('error');
			nameField.next('.error').html('Name required.');
		} else if (nameField.val().length > 100) {
			nameField.addClass('error');
			nameField.next('.error').html('Name must not be more than 100 characters.');
		} else {
			let namePattern = /((\b[A-z]+\b)\s?){2,}/
			
			if (!namePattern.exec(nameField.val())) {
				nameField.addClass('error');
				nameField.next('.error').html('Please input your full name.');
			}
		}
		
		let adress1Field = this.form.find('#address1');
		let adress2Field = this.form.find('#address2');
		if (!adress1Field.val().length) {
			adress1Field.addClass('error');
			adress2Field.addClass('not-error');
			adress1Field.next('.error').html('Address 1 required.');
		} else if (adress1Field.val().length > 100) {
			adress1Field.addClass('error');
			adress2Field.addClass('not-error');
			adress1Field.next('.error').html('Address 1 must not be more than 100 characters.');
		}
		
		if (adress2Field.val().length > 100) {
			adress2Field.addClass('error');
			adress2Field.next('.error').html('Address 2 must not be more than 100 characters.');
		}
		
		let cityField = this.form.find('#city');
		if (!cityField.val().length) {
			cityField.addClass('error');
			cityField.next('.error').html('City required.');
		}else if (cityField.val().length > 50) {
			cityField.addClass('error');
			cityField.next('.error').html('City must not be more than 50 characters.');
		}
		
		let stateField = this.form.find('#state');
		if (stateField.val() === '0') {
			stateField.addClass('error');
			stateField.next('.error').html('State required.');
		}
		
		let zipField = this.form.find('#zip');
		if (!zipField.val().length) {
			zipField.addClass('error');
			zipField.next('.error').html('Zip code required.');
		} else {
			if (zipField.val().length != 5) {
				zipField.addClass('error');
				zipField.next('.error').html('Invalid Zip Code. Zip codes should be exactly 5 digits long.');
			}
		}
		
		e.preventDefault();
	}
	
	resetFields() {
		this.form.find('.input-group input').val('');
	}
	
	filterAlpha() {
		let pattern = /(([A-z]*)\s?)*/
		$(this).val(pattern.exec($(this).val())[0]);
	}
	
	filterNumber() {
		let value = parseInt($(this).val());
		$(this).val(value ? value : '');
	}
}