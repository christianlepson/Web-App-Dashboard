$(function() {
	var $alerts = $('#alerts');
	var $headerNotify = $('#header-alert-notify');
	var $messageSubmitBtn = $('#message-submit');

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
			var recipientError = "<div class='msgFailure'>Recipient field is required.</div>";
			var msgBodyError = "<div class='msgFailure'>Message field is required.</div>";

			var recipientErr = function() {
				$recipient.css('border', '1px solid #cc0000');
				$recipient.css('background', '#ffe6e6');
				$recipient.after(recipientError);
				$recipient.focus( function() {$recipient.next(".msgFailure").fadeOut();} );
			};

			var messageErr = function() {
				$messageContent.css('border', '1px solid #cc0000');
				$messageContent.css('background', '#ffe6e6');
				$messageContent.after(msgBodyError);
				$messageContent.focus( function() {$messageContent.next(".msgFailure").fadeOut();} );
			};

			var messageSuccess = function() {
				$messageSubmitBtn.after('<div class="msgSuccess"> Your message was successfully sent to '+ $recipient.val() + '.</div>');
				$(".msgSuccess").fadeOut(2000);
			}

			if ( $('.msgFailure') ) {
				$('.msgFailure').remove();
			}

			if ( $recipient.val() == "" && $messageContent.val() == "" ) {
				recipientErr();
				messageErr();
			} else if ($recipient.val() == "") {
				recipientErr();
			} else if ($messageContent.val() == "") {
				messageErr();
			} else {
				//Send message
				messageSuccess();
			}
	};

	$messageSubmitBtn.on('click', function(event) {
		event.preventDefault();
		messageHandler();
	});
	alertUser();
});