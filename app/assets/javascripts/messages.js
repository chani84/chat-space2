$(document).on('turbolinks:load',function(){

  function buildHTML(message){

   var image = message.image ? `<asset_path src=${message.image} >` : ``;

        var html =
         `<div class="message" data-message-id=${message.id}>
            <div class="upper-message">
              <div class="upper-message__user-name">
                ${message.user_name}
              </div>
              <div class="upper-message__date">
                ${message.date}
              </div>
            </div>
            <div class="lower-message">
              <p class="lower-message__content">
                ${message.content}
              </p>
            </div>
            ${image}
          </div>`
        return html;
  };

  $('#js-form').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      console.log(data);
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('.form')[0].reset();
    })
    .fail(function(data){
      alert('error');
    });
    return false;
  });

    var interval = setInterval(function(){
      if (location.pathname.match(/\/groups\/\d+\/messages/)) {
      var message_id = $('.message').last().data('message-id');
      $.ajax({
        url: location.href,
        type: 'GET',
        data: { id: message_id },
        dataType: 'json'
      })
      .done(function(data){
        var insertHTML = '';
        data.forEach(function(data){
           insertHTML += buildHTML(data);
           $('.messages').append(insertHTML);
          })
      })
      .fail(function(data){
        alert('自動更新に失敗しました')
      })
    } else {
     clearInterval(interval);
    } }, 5000 );
});

