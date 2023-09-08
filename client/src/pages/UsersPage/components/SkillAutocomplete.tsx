import { FC, useCallback, useEffect, useState } from 'react'
import { Autocomplete, Chip, TextField, debounce } from '@mui/material'
import { Skill } from '@backend/*'

import UserClient from '../../../api/ApiClient'
import { Spinner } from '../../../ui'

type SkillAutocompleteProps = {
  loading: boolean
  selected: Skill[]
  onSelect: (skills: Skill[]) => void
}

export const SkillAutocomplete: FC<SkillAutocompleteProps> = ({
  loading,
  selected,
  onSelect,
}) => {
  const [inputValue, setInputValue] = useState('')
  const [options, setOptions] = useState<Skill[]>([])

  const fetch = useCallback(
    debounce(async (q: string) => {
      const result = await UserClient.getSkillsByName(q)
      setOptions(result)
    }, 400),
    []
  )

  useEffect(() => {
    if (inputValue === '') {
      return undefined
    }
    fetch(inputValue)
  }, [fetch, inputValue])

  return (
    <Autocomplete
      filterSelectedOptions
      getOptionLabel={(option) => option.name}
      loading={loading}
      loadingText="Loading…"
      multiple
      noOptionsText={inputValue === '' ? 'Try "HTML"' : 'No options'}
      onChange={(_, newValue) => {
        onSelect(newValue)
        setOptions([])
      }}
      onInputChange={(_, newInputValue) =>
        newInputValue && setInputValue(newInputValue)
      }
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Skills"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <Spinner /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
          placeholder="Search…"
          size="small"
          variant="outlined"
        />
      )}
      renderTags={(selected, getTagProps) =>
        selected.map((skill, index) => (
          <Chip label={skill.name} size="small" {...getTagProps({ index })} />
        ))
      }
      value={selected}
    />
  )
}
