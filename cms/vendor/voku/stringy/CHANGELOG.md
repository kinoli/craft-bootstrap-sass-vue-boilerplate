# Changelog

### 6.4.0 (2020-09-27)
- add "isAscii()"
- add "isBinary()"
- add "isBom()"
- add "isBinary()"
- add "isUrl()"
- add "isUtf8()"
- add "isUtf16()"
- add "isUtf32()"

### 6.3.1 (2020-05-24)
- update vendor (ASCII)

### 6.3.0 (2020-05-14)
- add "callUserFunction()"
- update vendor lib "voku/arrayy"
- move code examples into the code
- use "voku/simple-php-code-parser" for building the "README" 

### 6.2.2 (2020-02-23)
- fix "isEqualsCaseInsensitive()" -> thanks to psalm
- update vendor lib "voku/arrayy"

### 6.2.1 (2020-01-31)
- update vendor lib "voku/arrayy"

### 6.2.0 (2020-01-04)
- add "newLineToHtmlBreak()"
- update vendor lib "voku/arrayy" (support for generics via phpstan & psalm)

### 6.1.0 (2019-12-30)
- use "@psalm-mutation-free"
- update vendor (ASCII)
- update vendor (Arrayy)
- use CollectionStringy() (optional)
- add "nth()"
- add "isSimilar()"
- add "similarity()"
- add "isWhitespace()"
- add "wrap()"
- add "words()"
- add "format()"
- add "chunk()"
- add "isNotEmpty()"
- add "isEquals()"
- add "softWrap()"
- add "hardWrap()"
- add "before()"
- add "after()"
- add "crypt()"
- add "bcrypt()"
- add "encrypt()"
- add "decrypt()"
- add "setInternalEncoding()"
- add "encode()"
- add "isNumeric()"
- add "studlyCase()" (pascalCase)
- add "snakeCase()"
- add "kebabCase()"
- add "appendStringy()"
- add "prependStringy()"
- add "urlEncodeRaw()"
- add "urlEncode()"
- add "urlDecodeRaw()" / "urlDecodeRawMulti()"
- add "urlDecode()" / "urlDecodeMulti()"


### 6.0.2 (2019-11-17)
- update "Arrayy" (collection lib)
- fix errors reported by psalm


### 6.0.1 (2019-10-14)
- update "Portable ASCII" from v1.2 -> v1.3


### 6.0.0 (2019-09-28)
- breaking-change: we always use language "en" instead of "de" as default
- breaking-change: "urlify()" has changed parameter order ($strToLower was replaced with $replacements)


### 5.2.0 (2019-09-07)
- update "slugify" -> use the Portable ASCII lib


### 5.1.1 (2019-08-21)
- extend "titleize" -> allow to specify what a word is
- extend "slugify" -> allow to specify replacements in the string
- optimize the regex for unicode strings


### 5.1.0 (2019-06-25)
- add CollectionStringy - StaticStringy::collection()
- "Implemented JsonSerializable" | thanks @ifcanduela
- "fix for the Greek letter Theta" | thanks @nikosv


### 5.0.3 (2019-06-24)
- fix regex for php 7.3


### 5.0.2 (2019-04-21)
- fix issues reported by phpstan (level 7)
- update vendor (better unicode support for regex stuff)


### 5.0.1 (2019-01-22)
- inline some simple functions
- update vendor


### 5.0.0 (2019-01-11)
- rename "slugify()" into "urlify()"
- re-add original "slugify()" method
- rename "toAscii()" into "toTransliterate()"
- re-add toAscii "slugify()" method
- apply php-cs fixes rules


### 4.1.2 (2018-11-29)
- fix error from "UTF8::remove_html()" with strict types


### 4.1.1 (2018-11-11)
- fix "replaceFirst()" + "replaceLast()"


### 4.1.0 (2018-08-03)
- add "replaceFirst()" + "replaceLast()"
- optimize the performance of almost all methods


### 4.0.2 (2018-01-07)

- set default encoding to UTF-8 (for static method calls) v2


### 4.0.1 (2018-01-07)

- set default encoding to UTF-8 (for static method calls)

 -> THX @ Xdebug + KCachegrind


### 4.0.0 (2017-12-23)

- add Stringy->titleizeForHumans() | thx @HipsterJazzbo
- update "Portable UTF8" from v4 -> v5
 
 -> this is a breaking change without API-changes - but the requirement from 
 "Portable UTF8" has been changed (it no longer requires all polyfills from Symfony)
 

### 3.0.0 (2017-12-03)

- drop support for PHP < 7.0
- use "strict_types"


### 2.1.0 - 2.2.36 (2016-2017)

- use Portable UTF-8 functions 


### 2.1.0 (2015-09-02)

- Added simplified StaticStringy class
- str in Stringy::create and constructor is now optional


### 2.0.0 (2015-07-29)

- Removed StaticStringy class
- Added append, prepend, toBoolean, repeat, between, slice, split, and lines
- camelize/upperCamelize now strip leading dashes and underscores
- titleize converts to lowercase, thus no longer preserving acronyms


### 1.10.0 (2015-07-22)

- Added trimLeft, trimRight
- Added support for unicode whitespace to trim
- Added delimit
- Added indexOf and indexOfLast
- Added htmlEncode and htmlDecode
- Added "Ç" in toAscii()


### 1.9.0 (2015-02-09)

- Added hasUpperCase and hasLowerCase
- Added $removeUnsupported parameter to toAscii()
- Improved toAscii support with additional Unicode spaces, Vietnamese chars,
   and numerous other characters
- Separated the charsArray from toAscii as a protected method that may be
   extended by inheriting classes
- Chars array is cached for better performance


### 1.8.1 (2015-01-08)

- Optimized chars()
- Added "ä Ä Ö Ü"" in toAscii()
- Added support for Unicode spaces in toAscii()
- Replaced instances of self::create() with static::create()
- Added missing test cases for safeTruncate() and longestCommonSuffix()
- Updated Stringy\create() to avoid collision when it already exists


### 1.8.0 (2015-01-03)

- Listed ext-mbstring in composer.json
- Added Stringy\create function for PHP 5.6


### 1.7.0 (2014-10-14)

- Added containsAll and containsAny
- Light cleanup


### 1.6.0 (2014-09-14)

- Added toTitleCase


### 1.5.2 (2014-07-09)

- Announced support for HHVM


### 1.5.1 (2014-04-19)

- Fixed toAscii() failing to remove remaining non-ascii characters
- Updated slugify() to treat dash and underscore as delimiters by default
- Updated slugify() to remove leading and trailing delimiter, if present


### 1.5.0 (2014-03-19)

- Made both str and encoding protected, giving property access to subclasses
- Added getEncoding()
- Fixed isJSON() giving false negatives
- Cleaned up and simplified: replace(), collapseWhitespace(), underscored(),
    dasherize(), pad(), padLeft(), padRight() and padBoth()
- Fixed handling consecutive invalid chars in slugify()
- Removed conflicting hard sign transliteration in toAscii()


### 1.4.0 (2014-02-12)

- Implemented the IteratorAggregate interface, added chars()
- Renamed count() to countSubstr()
- Updated count() to implement Countable interface
- Implemented the ArrayAccess interface with positive and negative indices
- Switched from PSR-0 to PSR-4 autoloading


### 1.3.0 (2013-12-16)

- Additional Bulgarian support for toAscii
- str property made private
- Constructor casts first argument to string
- Constructor throws an InvalidArgumentException when given an array
- Constructor throws an InvalidArgumentException when given an object without
    a __toString method


### 1.2.2 (2013-12-04)

- Updated create function to use late static binding
- Added optional $replacement param to slugify


### 1.2.1 (2013-10-11)

- Cleaned up tests
- Added homepage to composer.json


### 1.2.0 (2013-09-15)

- Fixed pad's use of InvalidArgumentException
- Fixed replace(). It now correctly treats regex special chars as normal chars
- Added additional Cyrillic letters to toAscii
- Added $caseSensitive to contains() and count()
- Added toLowerCase()
- Added toUpperCase()
- Added regexReplace()


### 1.1.0 (2013-08-31)

- Fix for collapseWhitespace()
- Added isHexadecimal()
- Added constructor to Stringy\Stringy
- Added isSerialized()
- Added isJson()


### 1.0.0 (2013-08-1)

- 1.0.0 release
- Added test coverage for Stringy::create and method chaining
- Added tests for returned type
- Fixed StaticStringy::replace(). It was returning a Stringy object instead of string
- Renamed standardize() to the more appropriate toAscii()
- Cleaned up comments and README


### 1.0.0-rc.1 (2013-07-28)

- Release candidate
