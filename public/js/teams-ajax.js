$(document).ready(function() {

// DELETE TEAM

	$('.delete-button').on('click', function(e){
		e.preventDefault();
		var teamUrl = $(this).attr('href');

		$.ajax({
			method: "DELETE",
			url: teamUrl
		}).done(function(data){
			alert("Not today, Bingo.");
			window.location = '/teams';
		}); //end ajax
	});


// EDIT TEAM

	$(".edit-form").on("submit", function(e){
		e.preventDefault(); 
		var teamUrl = $(this).attr("action"); 
		var teamData = $(this).serialize();

		$.ajax({ 
			method: "PUT",
			url: teamUrl,
			data: teamData
		}).done(function(data){
			alert("Team edited!");
			window.location = "/teams"; 
		});

	}); //End put form




});
