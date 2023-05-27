'use client'
import React, { ChangeEvent, useState } from 'react'

export default function MediaPicker() {
  const [preview, setPreview] = useState<String | null>(null)

  function onFieldSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])
    setPreview(previewURL)
  }
  return (
    <>
      <input
        type="file"
        id="media"
        name="coverUrl"
        onChange={onFieldSelected}
        className="invisible h-0 w-0"
        accept="image/*"
      />

      {preview && (
        // eslint-disable-next-line
        <img
          src={String(preview)}
          alt=""
          className="aspect-video w-full rounded-lg object-cover "
        />
      )}
    </>
  )
}
