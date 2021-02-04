<?php
/**
 * @link https://craftcms.com/
 * @copyright Copyright (c) Pixel & Tonic, Inc.
 * @license https://craftcms.github.io/license/
 */

namespace craft\base;

use craft\errors\AssetException;
use craft\errors\VolumeException;
use craft\errors\VolumeObjectExistsException;
use craft\errors\VolumeObjectNotFoundException;
use craft\models\FieldLayout;

/**
 * VolumeInterface defines the common interface to be implemented by volume classes.
 * A class implementing this interface should also use [[SavableComponentTrait]] and [[VolumeTrait]].
 *
 * @mixin VolumeTrait
 * @author Pixel & Tonic, Inc. <support@pixelandtonic.com>
 * @since 3.0.0
 */
interface VolumeInterface extends SavableComponentInterface
{
    /**
     * Returns the volume's field layout, or `null` if it doesn’t have one.
     *
     * @return FieldLayout|null
     * @since 3.5.0
     */
    public function getFieldLayout();

    /**
     * Returns the URL to the source, if it’s accessible via HTTP traffic.
     *
     * The URL should end in a `/`.
     *
     * @return string|false The root URL, or `false` if there isn’t one
     */
    public function getRootUrl();

    /**
     * List files.
     *
     * @param string $directory The path of the directory to list files of
     * @param bool $recursive whether to fetch file list recursively
     * @return array
     */
    public function getFileList(string $directory, bool $recursive): array;

    /**
     * Return the metadata about a file.
     *
     * @param string $uri URI to the file on the volume
     * @return array
     * @throws VolumeObjectNotFoundException if the file cannot be found
     * @deprecated in Craft 3.6.0. Use [[getFileSize()]] and [[getDateModified()]] instead.
     */
    public function getFileMetadata(string $uri): array;

    /**
     * Returns the file size.
     *
     * @param string $uri
     * @return int|null
     * @throws VolumeObjectNotFoundException if the file cannot be found
     * @since 3.6.0
     */
    public function getFileSize(string $uri): ?int;

    /**
     * Returns the last time the file was modified.
     *
     * @param string $uri
     * @return int|null
     * @throws VolumeObjectNotFoundException if the file cannot be found
     * @since 3.6.0
     */
    public function getDateModified(string $uri): ?int;

    /**
     * Creates a file.
     *
     * @param string $path The path of the file, relative to the source’s root
     * @param resource $stream The stream to file
     * @param array $config Additional config options to pass to the adapter
     * @throws VolumeObjectExistsException if a file already exists at the path on the Volume
     * @throws VolumeException if something else goes wrong
     */
    public function createFileByStream(string $path, $stream, array $config);

    /**
     * Updates a file.
     *
     * @param string $path The path of the file, relative to the source’s root
     * @param resource $stream The new contents of the file as a stream
     * @param array $config Additional config options to pass to the adapter
     * @throws VolumeObjectNotFoundException if the file to be updated cannot be found
     * @throws VolumeException if something else goes wrong
     */
    public function updateFileByStream(string $path, $stream, array $config);

    /**
     * Returns whether a file exists.
     *
     * @param string $path The path of the file, relative to the source’s root
     * @return bool
     */
    public function fileExists(string $path): bool;

    /**
     * Deletes a file.
     *
     * @param string $path The path of the file, relative to the source’s root
     * @throws VolumeException if something goes wrong
     */
    public function deleteFile(string $path);

    /**
     * Renames a file.
     *
     * @param string $path The old path of the file, relative to the source’s root
     * @param string $newPath The new path of the file, relative to the source’s root
     * @throws VolumeObjectExistsException if a file with such a name exists already
     * @throws VolumeObjectNotFoundException if the file to be renamed cannot be found
     * @throws VolumeException if something else goes wrong
     */
    public function renameFile(string $path, string $newPath);

    /**
     * Copies a file.
     *
     * @param string $path The path of the file, relative to the source’s root
     * @param string $newPath The path of the new file, relative to the source’s root
     * @throws VolumeObjectExistsException if a file with such a name exists already
     * @throws VolumeObjectNotFoundException if the file to be renamed cannot be found
     * @throws VolumeException if something else goes wrong
     */
    public function copyFile(string $path, string $newPath);

    /**
     * Save a file from the source's uriPath to a local target path.
     *
     * @param string $uriPath
     * @param string $targetPath
     * @return int amount of bytes copied
     */
    public function saveFileLocally(string $uriPath, string $targetPath): int;

    /**
     * Gets a stream ready for reading by a file's URI.
     *
     * @param string $uriPath
     * @return resource
     * @throws AssetException if a stream cannot be created
     */
    public function getFileStream(string $uriPath);

    /**
     * Returns whether a folder exists at the given path.
     *
     * @param string $path The folder path to check
     * @return bool
     */
    public function folderExists(string $path): bool;

    /**
     * Creates a directory.
     *
     * @param string $path The path of the directory, relative to the source’s root
     * @throws VolumeObjectExistsException if a directory with such name already exists
     * @throws VolumeException if something else goes wrong
     * @deprecated in 3.6.0. Use [[createDirectory()]] instead.
     */
    public function createDir(string $path);

    /**
     * Creates a directory.
     *
     * @param string $path The path of the directory, relative to the source’s root
     * @throws VolumeObjectExistsException if a directory with such name already exists
     * @throws VolumeException if something else goes wrong
     */
    public function createDirectory(string $path);

    /**
     * Deletes a directory.
     *
     * @param string $path The path of the directory, relative to the source’s root
     * @throws VolumeException if something goes wrong
     * @deprecated in 3.6.0. Use [[deleteDirectory()]] instead.
     */
    public function deleteDir(string $path);

    /**
     * Deletes a directory.
     *
     * @param string $path The path of the directory, relative to the source’s root
     * @throws VolumeException if something goes wrong
     */
    public function deleteDirectory(string $path);

    /**
     * Renames a directory.
     *
     * @param string $path The path of the directory, relative to the source’s root
     * @param string $newName The new path of the directory, relative to the source’s root
     * @throws VolumeObjectNotFoundException if a directory with such name already exists
     * @throws VolumeObjectExistsException if a directory with such name already exists
     * @throws VolumeException if something else goes wrong
     * @deprecated in 3.6.0. Use [[renameDirectory()]] instead.
     */
    public function renameDir(string $path, string $newName);

    /**
     * Renames a directory.
     *
     * @param string $path The path of the directory, relative to the source’s root
     * @param string $newName The new path of the directory, relative to the source’s root
     * @throws VolumeObjectNotFoundException if a directory with such name already exists
     * @throws VolumeObjectExistsException if a directory with such name already exists
     * @throws VolumeException if something else goes wrong
     */
    public function renameDirectory(string $path, string $newName);
}
