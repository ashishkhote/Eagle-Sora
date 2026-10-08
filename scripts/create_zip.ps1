$src = "c:\Users\Tushar\Desktop\EAGLE SORA"
$zip = "c:\Users\Tushar\Desktop\EAGLE SORA\EAGLE_SORA.zip"
$desktopZip = "c:\Users\Tushar\Desktop\EAGLE_SORA.zip"

if (Test-Path $zip) { Remove-Item $zip -Force }
if (Test-Path $desktopZip) { Remove-Item $desktopZip -Force }

$items = Get-ChildItem -Path $src -Exclude "node_modules", ".next", ".git", "EAGLE_SORA.zip", "tsconfig.tsbuildinfo"

Write-Host "Compressing $($items.Count) top-level directories and files..."
Compress-Archive -Path $items.FullName -DestinationPath $zip -CompressionLevel Optimal -Force

Copy-Item $zip $desktopZip -Force

$sizeMB = [math]::Round((Get-Item $zip).Length / 1MB, 2)
Write-Host "SUCCESS: Created $zip ($sizeMB MB)"
Write-Host "SUCCESS: Also copied to $desktopZip"
