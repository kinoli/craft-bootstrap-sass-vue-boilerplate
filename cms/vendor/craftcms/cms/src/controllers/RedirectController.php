<?php
/**
 * @link https://craftcms.com/
 * @copyright Copyright (c) Pixel & Tonic, Inc.
 * @license https://craftcms.github.io/license/
 */

namespace craft\controllers;

use craft\web\Controller;
use yii\web\Response;

/**
 * RedirectController
 *
 * @author Pixel & Tonic, Inc. <support@pixelandtonic.com>
 * @since 3.5.13
 */
class RedirectController extends Controller
{
    /**
     * @inheritdoc
     */
    public $allowAnonymous = true;

    /**
     * Handles control panel logo and site icon uploads.
     *
     * @param string $url
     * @param int $statusCode The response status code
     * @return Response
     */
    public function actionIndex(string $url, int $statusCode = 302): Response
    {
        return $this->redirect($url, $statusCode);
    }
}
