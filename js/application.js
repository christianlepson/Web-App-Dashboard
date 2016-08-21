$(function() {
	var $alerts = $('#alerts');
	var $headerNotify = $('#header-alert-notify');
	var $messageSubmitBtm = $('#message-submit');

	//alertUser creates notifications with click events
	var alertUser = function() {
		//Get notification text
		var notifyText = "Nullam sagittis venenatis enim, vitae efficitur ligula volutpat ut.";
		//Append Notification (with close button) to Alerts div
		$alerts.append('<div class="notification"><p><strong>Alert</strong></p>' + 
			notifyText + '</p><span class="close"></span></div>');
		//Close Notification when close button is clicked
		$(".close").on('click', function() {
			var parentDiv = $(this).parents("div.notification");
			parentDiv.fadeOut(500, function() { $(this).remove(); });
			//If no alerts, remover green header notification symbol
			console.log($alerts.children());
			if ( $alerts.children().length <= 1 ) {
				$headerNotify.fadeOut();
			}
		});
	};

	// Event handler for user message submission
	var messageHandler = function() {
			var $messageDiv = $('#message');
			var $recipient = $('#user-search');
			var $messageContent = $('#user-message-area');



			if ($recipient.val() == "") {
				alert('Message must have a recipient.');
			} else if ($messageContent.val() == "") {
				alert('Message must not be blank.');
			} else {
				//Send message
				alert('Your message was successfully sent to '+ $recipient.val());
			}
	};

	$messageSubmitBtm.on('click', function(event) {
		event.preventDefault();
		messageHandler();
	});
	alertUser();
});