$( function() {
	var namesArray = [
	"Adam",
	"Brienne",
	"Charlize",
	"Desmond",
	"Erin",
	"Farrah",
	"Gina",
	"Hellen",
	"India",
	"Jason",
	"Kai",
	"Lisa",
	"Michael",
	"Nathan",
	"Olenna",
	"Pauline",
	"Qatarah",
	"Reena",
	"Slyvester",
	"Tina",
	"Ursula",
	"Veronica",
	"Wesley",
	"Xaviera",
	"Yolonda",
	"Zahara"
	];
	console.log(namesArray);
	console.log($("#search"));
	$( "#search" ).autocomplete({
      source: namesArray
    });
    $( "#user-search" ).autocomplete({
      source: namesArray
    });
} );