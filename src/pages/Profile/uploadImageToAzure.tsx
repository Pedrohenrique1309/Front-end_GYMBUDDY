'use strict'

interface UploadParams {
  file: File;
  storageAccount: string;
  sasToken: string;
  containerName: string;
}

export async function uploadImageToAzure(uploadParams: UploadParams): Promise<string> {
    // Descontruindo o Json recebido
    const { file, storageAccount, sasToken, containerName } = uploadParams;

    // Criando nomes únicos para cada imagem utilizando o horário/data 
    const blobName = `${Date.now()}-${file.name}`;

    const baseUrl = `https://${storageAccount}.blob.core.windows.net/${containerName}/${blobName}`;
    const uploadUrl = `${baseUrl}?${sasToken}`;

    const options = {
      method: "PUT",
      headers: {
        "x-ms-blob-type": "BlockBlob",
        "Content-Type": file.type || "application/octet-stream",
      },
      body: file,
    }

    const response = await fetch(uploadUrl, options)

    if (response.ok) {
      return baseUrl;
    } else {
      throw new Error(`Upload failed: ${response.status} ${response.statusText}`);
    }
}

