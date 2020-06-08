jQuery(document).ready(function($) {
	$(".openfeed").magnificPopup({
		type: "inline",
		midClick: true,
		closeBtnInside: true,
		alignTop: false
	});

	$.validator.addMethod("emailfull", function(value, element) {
		return this.optional(element) || /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(value);
	}, "Please enter valid email address!");

	$.validator.addMethod("nofreeemail", function (value) {
		return /^([\w-.]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)(?!outlook\.com)([\w-]+.)+[\w-]{2,4})?$/.test(value); 
	}, "Please use only company email address only");

	var val = {
		rules: {
			Field1: "required",
			Field2: "required",
			Field4: "required",
			Field6: "required",
			Field8: "required",
			Field3: {
				required: true,
				email: true,
				emailfull: true,
				nofreeemail: true
			},
			Field5: {
				required: true,
				digits: true
			}
		},
		messages: {
			Field1: "This field is required",
			Field2: "This field is required",
			Field4: "This field is required",
			Field6: "This field is required",
			Field8: "This field is required",
			Field3: {
				required: "This field is required",
				Field3: "Please enter a valid email address"
			}
		}
	}

	$("#form47").multiStepForm({
		validations:val
	}).navigateTo(0);

	$('#form47').submit(function(){
		if($('#checkbox-1 input:checked').length < 1){
			$('#checkbox1alert').show();
			$('#checkbox1alert').html("You need at least 1 answers to be checked for this question");
			
			return false;
		}else{
			$('#checkbox1alert').hide();
		}

		if($('#checkbox-2 input:checked').length < 1){
			$('#checkbox2alert').show();
			$('#checkbox2alert').html("You need 1 answers to be checked for this question");
			
			return false;
		}else{
			$('#checkbox2alert').hide();
		}

		if($('#checkbox-3 input:checked').length < 1){
			$('#checkbox3alert').show();
			$('#checkbox3alert').html("You need 1 answers to be checked for this question");
			
			return false;
		}else{
			$('#checkbox3alert').hide();
		}
	});

	var other = $("#Field212");
	var initial = other.is(":checked");
	var otherPos = $("#foli411")[initial ? "removeClass" : "addClass"]("hide");
	var posInputs = otherPos.find("input").attr("disabled", !initial);

	other.click(function() {
		otherPos[this.checked ? "removeClass" : "addClass"]("hide");
		posInputs.attr("disabled", !this.checked);
	});
});