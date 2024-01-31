<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to my personal website</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      display: flex;
    }

    .left-column {
      width: 30%;
      background-color: #f1f1f1;
      padding: 20px;
      box-sizing: border-box;
    }

    .right-column {
      flex: 1;
      padding: 20px;
      box-sizing: border-box;
    }

    h3 {
      color: #333;
    }

    /* 在小屏幕上使用媒体查询进行响应式设计 */
    @media screen and (max-width: 768px) {
      body {
        flex-direction: column;
      }

      .left-column, .right-column {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <div class = "left-column">
    <h3>About me</h3>
    <p></p>
  </div>
</body>
</html>
