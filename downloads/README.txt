DAT VERiFiER - Installation and Usage Guide
=====================================

Quick Start:
-----------
1. Make sure you have Python 3.6 or newer installed
2. Download datverifier.py
3. Make it executable (Linux/Mac):
   chmod +x datverifier.py

Basic Usage:
-----------
python datverifier.py <dat_file> <roms_folder>

Example:
python datverifier.py "Nintendo - Game Boy Advance (20230823-020507).dat" "GBA ROMs"

Options:
--------
--remove-unknown    Remove files that don't match any DAT checksums
--output FILE      Specify output report filename (default: verification_report.txt)

Example with options:
python datverifier.py "Nintendo.dat" "ROMs" --output report.txt

The tool will:
- Verify your ROMs against the DAT file
- Automatically rename misnamed ROMs
- Identify bad dumps
- List missing ROMs
- Generate a detailed report

Need help? Visit: [Your Website]

Note: This tool uses only Python standard library modules - no additional installation required! 