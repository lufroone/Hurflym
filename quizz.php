<?php
    // Souvent on identifie cet objet par la variable $conn ou $db
    try
    {
        $dsn = 'mysql:host=sql11.freemysqlhosting.net;dbname=sql11493623;port=3306;charset=utf-8';
        $bdd = new PDO($dsn,'sql11493623','aR7jHuVJU5');
        echo($dd);
    }
    catch (Exception $e)
    {
        echo($dd);
	    die('Erreur : ' . $e->getMessage());
    }
?>

<html>
    <head>
        <meta charset="utf-8">
        <title>Hurflym</title>
        <link rel= "stylesheet" href= "quizz.css">

        
        
    </head>
    <body>
        <div class = "header">
            <h1>Partagez-nous votre expérience</h1>
        </div>
        <div class = "main">
            <div class = "table">
                <forms action="quizz.php" method="post" class="form-quizz">
                    <div class = "question">
                        <p>Qu'elle est la qualité du sol?</p>
                    </div>
                    <div class = "reponse">
                        <input type="int" name="reponse_sol" id="reponse_sol">
                    </div>
                    <input type="submit" name="Envoyer">
                </forms>
                <?php
                    if (isset($_POST["reponse_sol"])){

                        $reponse = $bdd->query(" INSERT INTO `Sol` (`id`, `reponse_sol`) VALUES ('','$_POST[reponse_sol]')");
                    }
                    
                ?>
            </div>
        </div>
        <div class = "footer">

        </div>
    </body>
</html>