let popup = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body style="margin: 200px auto;">
    <div class="popup" style="background-color: #ddd; border: #eee 1px solid; padding: 20px; text-align: center; width: 300px;">
      <div class="content">
        <h3 class="title">Welcome</h3>
        <p class="message">Welcome to LearnCodeEasily</p>
      </div>
      <button class="close" onclick="this.closest('.popup').remove()">Close</button>
    </div>
    <script src="main.js"></script>
  </body>
</html>
`;

setTimeout(() => document.writeln(popup), 5000);
