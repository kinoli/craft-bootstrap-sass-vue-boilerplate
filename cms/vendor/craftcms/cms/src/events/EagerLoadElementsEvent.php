<?php
/**
 * @link https://craftcms.com/
 * @copyright Copyright (c) Pixel & Tonic, Inc.
 * @license https://craftcms.github.io/license/
 */

namespace craft\events;

use craft\base\ElementInterface;
use craft\elements\db\EagerLoadPlan;
use yii\base\Event;

/**
 * Eager-load event class
 *
 * @author Pixel & Tonic, Inc. <support@pixelandtonic.com>
 * @since 3.5.0
 */
class EagerLoadElementsEvent extends Event
{
    /**
     * @var string The source element type
     */
    public $elementType;

    /**
     * @var ElementInterface[] The source elements
     */
    public $elements;

    /**
     * @var EagerLoadPlan[] The eager-loading plans
     */
    public $with;
}
